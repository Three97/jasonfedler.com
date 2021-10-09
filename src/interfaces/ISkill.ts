import TopicType from '../enums/TopicType';

interface ISkill {
  topic?: TopicType,
  skill: string,
  site: string,
  proficiency: number,
  color: string
}

export default ISkill;