
import tensorflow as tf
from tensorflow.keras.models import load_model
import streamlit as st
import numpy as np 
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from gtts import gTTS
import tempfile
import base64

st.header('Image Classification Model')

# Load the model
model_path = 'D:/Python/Image_Classification/Image_classify.keras'  # file path
model = load_model(model_path)

# List of categories
data_cat = ['apple', 'banana', 'beetroot', 'bell pepper', 'cabbage', 'capsicum', 'carrot', 'cauliflower', 'chilli pepper', 'corn', 'cucumber', 'eggplant', 'garlic', 'ginger', 'grapes', 'jalepeno', 'kiwi', 'lemon', 'lettuce', 'mango', 'onion', 'orange', 'paprika', 'pear', 'peas', 'pineapple', 'pomegranate', 'potato', 'raddish', 'soy beans', 'spinach', 'sweetcorn', 'sweetpotato', 'tomato', 'turnip', 'watermelon']

img_height = 180
img_width = 180

# Input image
image = st.text_input('Enter Image name', 'Apple.jpg')

try:
    # Load and preprocess the image
    image_load = load_img(image, target_size=(img_height, img_width))
    img_arr = img_to_array(image_load)
    img_bat = np.expand_dims(img_arr, axis=0)

    # Model prediction
    predict = model.predict(img_bat)
    score = tf.nn.softmax(predict)

    # Display the image
    st.image(image_load, width=200)

    # Display prediction results
    st.write('Veg/Fruit in image is ' + data_cat[np.argmax(score)])
    st.write('With accuracy of ' + str(np.max(score) * 100))

    # Text to Speech
    text_to_speech = 'The identified object is ' + data_cat[np.argmax(score)] + ' with an accuracy of ' + str(np.max(score) * 100) + ' percent.'
    tts = gTTS(text_to_speech)

    # Write audio to a temporary file
    with tempfile.NamedTemporaryFile(delete=False) as fp:
        tts.save(fp.name)
        audio_bytes = fp.read()

    # Autoplay JavaScript for HTML5 audio element
    st.markdown(
        f"""
        <audio autoplay>
          <source src="data:audio/mpeg;base64,{base64.b64encode(audio_bytes).decode()}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        """,
        unsafe_allow_html=True
    )

except Exception as e:
    st.write("Error loading image:", e)