import DisciplineType from '../enums/DisciplineType';

const GetDisciplineByDisciplineType = (disciplineType: DisciplineType): string => {
  let discipline = "";
  switch (disciplineType) {
    case DisciplineType.Backend: { discipline = "Backend"; break; }
    case DisciplineType.Frontend: { discipline = "Frontend"; break; }
    case DisciplineType.Platform: { discipline = "Platform"; break; }
    case DisciplineType.Build: { discipline = "Build"; break; }
  }
  return discipline;
}

export default GetDisciplineByDisciplineType;