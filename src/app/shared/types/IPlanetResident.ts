export interface IPlanetResident {
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  name: string;
  skinColor: string;
}

export interface IPlanetResidentResponse extends IPlanetResident {
  birth_year: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
}
