# Udagram Image Filtering Microservice

Image filtering service application runs on nodeJS with Express. It consists of an endpoint that takes an image_url as a query parameter, processes an image through a filter and returns the filtered image.

This service is deployed using the AWS Elastic Beanstalk.

This is a part of the second project for [Udacity Cloud Developer Nanodegree Course](https://www.udacity.com/course/cloud-developer-nanodegree--nd9990).

## How to use it

Follow the instructions and the example given below

- URL: <http://image-filter-dev-dev2.us-east-2.elasticbeanstalk.com/filteredimage>
- Params: (Query)
  - key: image_url
  - value: hosted image url

Example: <http://udagram-image-filter-dev2.us-west-2.elasticbeanstalk.com/filteredimage?image_url=https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg>

## Elastic Beanstalk deployment screenshots

You can find the screenshots under the directory `deployment_screenshots`
