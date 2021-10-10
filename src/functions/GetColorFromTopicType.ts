import TopicType from '../enums/TopicType';

const GetColorFromTopicType = (topicType: TopicType) => {
  const backEnd = "#512bd4"; // purple
  const frontEnd = "ff8d00"; // orange
  const devOps = ""; // 
  const cloud = ""; // 
  const security = ""; // 
  const architecture = ""; // 
  const other = "#005236"; // dark green

  const colorArray = [
    backEnd, frontEnd, devOps, cloud, security, architecture, other
  ]

  return colorArray[topicType];
}

export default GetColorFromTopicType;