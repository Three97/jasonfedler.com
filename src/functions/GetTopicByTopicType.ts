import TopicType from '../enums/TopicType';

const GetTopicByTopicType = (topicType: TopicType): string => {
  let topic = "";
  switch (topicType) {
    case TopicType.Architecture: { topic = "Architecture"; break; }
    case TopicType.Backend: { topic = "Backend"; break; }
    case TopicType.Cloud: { topic = "Cloud"; break ; }
    case TopicType.Frontend: { topic = "Frontend"; break; }
    case TopicType.Process: { topic = "Process"; break; }
    case TopicType.Security: { topic = "Security"; break; }
  }
  return topic;
}

export default GetTopicByTopicType;