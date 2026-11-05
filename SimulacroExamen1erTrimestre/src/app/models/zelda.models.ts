export interface APIZeldaResponse {
  data: dataZelda[];
  message: string;
  status: number;
}

export interface dataZelda {
  category: string;
  common_locations: string[];
  cooking_effect: string;
  description: string;
  dlc: boolean;
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
}
