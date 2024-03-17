const formatLargeCounts = (count) => {
  if (count > 999) {
    return Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + "k";
  } else {
    return count;
  }
};

export default formatLargeCounts;
