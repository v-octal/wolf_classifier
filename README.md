# Wolf Classifier
I've been fascinated by wolves for a long time. So, when I learned image classification using deep learning, I decided to make wolf classifier.

You can check out the demo of the app [here](http://geekyjock.me/wolf_classifier/).

*(Make sure that you use a good image url, if it fails, try some other url for image)*
![image](https://user-images.githubusercontent.com/19239291/69005191-772bb280-0944-11ea-8017-8c6a10f643c7.png)
As of now, the model only classifies wolves into four categories: 'Arctic', 'Eastern', 'Indian', 'Northwestern'!

# Notebook
You can check out the notebook [here](https://github.com/geekyJock8/wolf_classifier/blob/master/model_training/Wolf%20Classifier.ipynb).

If you are having difficulties with above link, view it the NBViewer [here](https://nbviewer.jupyter.org/github/geekyJock8/wolf_classifier/blob/master/model_training/Wolf%20Classifier.ipynb).

# Collecting Data
I collected images of Wolves using google images. The reason why there are only four categories is because there weren't a lot of good images available for other categories in top results. With a little more effort this can be easily expanded.

I used an awesome method by Adrian Rosebrock to collect these images. You can learn more about this method [here](https://www.pyimagesearch.com/2017/12/04/how-to-create-a-deep-learning-dataset-using-google-images/).

# Results
The model was tested against a holdout test set of 8 images, it got 7 out 8 correct.

# 
Contributions are welcome!
