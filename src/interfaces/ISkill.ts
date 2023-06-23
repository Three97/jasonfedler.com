import DisciplineType from '../enums/DisciplineType';

interface ISkill {
  discipline: DisciplineType,
  skill: string,
  site: string,
  proficiency: number
}

export default ISkill;