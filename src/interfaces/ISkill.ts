import DisciplineType from '../enums/DisciplineType';

interface ISkill {
  discipline: DisciplineType,
  skill: string,
  site: string,
  proficiency: number,
  color: string
}

export default ISkill;