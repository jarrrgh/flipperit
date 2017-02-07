const BASE_URL = 'http://flipperit.net/flipperitutka';

const Endpoints = {
  pins: `${BASE_URL}/find.pl`,
  pin: (pinId) => `${BASE_URL}/view.pl?id=${pinId}`,
  editPin: (pinId) => `${BASE_URL}/edit.pl?id=${pinId}`
};

export default Endpoints;
