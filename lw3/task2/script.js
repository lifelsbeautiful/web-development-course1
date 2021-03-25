function isTimeRangesIntersect(timedistance1, timedistance2) {
  if (Array.isArray(timedistance1) && Array.isArray(timedistance2)) {
    if (timedistance1[0] < timedistance2[0] && timedistance1[1] < timedistance2[0] ||
      timedistance1[0] > timedistance2[0] && timedistance2[1] < timedistance1[0]) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true