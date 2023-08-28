import DisciplineType from '../enums/DisciplineType';

interface ISkill {
  discipline: DisciplineType,
  name: string,
  helpUrl: string,
  proficiency: number
}

export default ISkill;