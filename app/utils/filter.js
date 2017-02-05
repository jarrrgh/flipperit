/* @flow */

export function filterPins(pins, text) {
  if (!text) {
    return pins;
  }

  let search = text.toLowerCase();

  return pins.filter((pin) =>
    pin.get('pinballName', '').toLowerCase().includes(search) ||
    pin.get('locationName', '').toLowerCase().includes(search) ||
    pin.get('address', '').toLowerCase().includes(search) ||
    pin.get('city', '').toLowerCase().includes(search)
  );
}
