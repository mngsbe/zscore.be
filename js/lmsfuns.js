var ages = [0, 0.08333333, 0.1666667, 0.25, 0.3333333, 0.4166667, 0.5, 0.5833333, 0.6666667, 0.75, 0.8333333, 0.9166667, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 99];

var hlms = [[[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[50.8, 55.2, 58.2, 61, 63.6, 65.9, 67.9, 69.6, 71.2, 72.6, 73.9, 75.2, 76.3, 79.7, 82.7, 85.4, 87.9, 96.3, 103.5, 110.3, 117.2, 123.8, 129.9, 135.4, 140.5, 145.8, 152, 158.8, 166, 171.9, 175.8, 178.1, 179.4, 180.2, 180.8, 181, 181],[0.039, 0.036, 0.035, 0.035, 0.034, 0.034, 0.033, 0.033, 0.033, 0.033, 0.033, 0.032, 0.032, 0.033, 0.033, 0.034, 0.035, 0.037, 0.039, 0.041, 0.042, 0.042, 0.042, 0.043, 0.043, 0.044, 0.046, 0.048, 0.047, 0.044, 0.041, 0.039, 0.038, 0.038, 0.037, 0.037, 0.037]],[[1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[50.2, 53.9, 56.8, 59.6, 62.2, 64.4, 66.4, 68, 69.5, 70.9, 72.2, 73.5, 74.7, 78.2, 81.4, 84.3, 86.9, 95.3, 102.3, 109.5, 116.4, 123, 129, 134.3, 139.9, 146.6, 153.2, 158.7, 162.4, 164.7, 165.8, 166.2, 166.3, 166.4, 166.5, 166.6, 166.6],[0.040, 0.034, 0.034, 0.034, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.034, 0.035, 0.035, 0.036, 0.038, 0.04, 0.041, 0.042, 0.043, 0.044, 0.044, 0.046, 0.047, 0.046, 0.043, 0.04, 0.038, 0.036, 0.036, 0.036, 0.036, 0.036, 0.036, 0.036]]];

var wlms = [[[0.7, 0.7, 0.6, 0.5, 0.4, 0.3, 0.3, 0.2, 0.2, 0.1, 0.1, 0, 0, -0.1, -0.2, -0.3, -0.3, -0.6, -0.7, -0.9, -1.1, -1.2, -1.3, -1.3, -1.3, -1.2, -1, -0.7, -0.5, -0.5, -0.7, -0.8, -0.9, -0.9, -1, -1, -1],[3.5, 4.5, 5.3, 6.1, 6.8, 7.4, 7.9, 8.4, 8.7, 9.1, 9.4, 9.7, 10, 10.8, 11.5, 12.1, 12.6, 14.8, 16.8, 18.8, 21.1, 23.6, 26.5, 29.6, 32.9, 36.4, 40.8, 46.1, 52.5, 58.5, 62.8, 65.9, 68, 69.6, 70.7, 71.5, 71.5],[0.130, 0.109, 0.108, 0.108, 0.107, 0.106, 0.106, 0.105, 0.105, 0.105, 0.105, 0.105, 0.105, 0.105, 0.105, 0.106, 0.106, 0.111, 0.117, 0.125, 0.134, 0.144, 0.154, 0.165, 0.175, 0.183, 0.191, 0.198, 0.198, 0.183, 0.165, 0.153, 0.146, 0.143, 0.142, 0.141, 0.141]],[[0.5, -0.1, -0.1, -0.1, -0.2, -0.2, -0.2, -0.2, -0.2, -0.3, -0.3, -0.3, -0.3, -0.4, -0.4, -0.4, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9, -0.9, -0.9, -0.9, -0.8, -0.7, -0.7, -0.9, -1, -1.2, -1.3, -1.3, -1.3, -1.4, -1.4, -1.4],[3.3, 4.2, 4.9, 5.6, 6.2, 6.8, 7.3, 7.7, 8.1, 8.4, 8.7, 9, 9.3, 10.1, 10.8, 11.5, 12.1, 14.3, 16.3, 18.5, 20.7, 23.4, 26.6, 29.8, 33.3, 37.5, 42.3, 47.1, 51.5, 54.9, 57.2, 58.5, 59.2, 59.6, 59.9, 60, 60],[0.130, 0.107, 0.107, 0.107, 0.106, 0.106, 0.106, 0.106, 0.106, 0.106, 0.106, 0.106, 0.106, 0.107, 0.108, 0.109, 0.109, 0.115, 0.122, 0.132, 0.144, 0.157, 0.169, 0.18, 0.192, 0.203, 0.205, 0.194, 0.175, 0.162, 0.155, 0.153, 0.152, 0.151, 0.151, 0.151, 0.151]]];

var blms = [[[0.5, -0.3, -0.4, -0.4, -0.4, -0.5, -0.5, -0.5, -0.6, -0.6, -0.6, -0.7, -0.7, -0.8, -0.9, -1, -1, -1.4, -1.7, -2, -2.2, -2.4, -2.5, -2.5, -2.5, -2.5, -2.4, -2.3, -2.2, -2.2, -2.1, -2, -1.9, -1.9, -1.8, -1.7, -1.7],[13.5, 14.6, 15.9, 16.5, 16.8, 17, 17.1, 17.2, 17.2, 17.2, 17.2, 17.1, 17.1, 16.9, 16.7, 16.6, 16.4, 15.9, 15.6, 15.5, 15.4, 15.5, 15.8, 16.2, 16.6, 17, 17.6, 18.2, 18.8, 19.5, 20.1, 20.6, 21, 21.4, 21.7, 21.9, 21.9],[0.088, 0.078, 0.078, 0.078, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.076, 0.076, 0.076, 0.076, 0.075, 0.075, 0.075, 0.075, 0.077, 0.082, 0.088, 0.095, 0.104, 0.113, 0.122, 0.128, 0.133, 0.135, 0.135, 0.132, 0.128, 0.124, 0.12, 0.118, 0.117, 0.116, 0.116]],[[0.2, -0.5, -0.5, -0.6, -0.6, -0.6, -0.6, -0.7, -0.7, -0.7, -0.7, -0.7, -0.8, -0.8, -0.9, -1, -1, -1.3, -1.5, -1.7, -1.8, -1.9, -1.9, -1.8, -1.8, -1.6, -1.6, -1.5, -1.4, -1.4, -1.5, -1.5, -1.6, -1.7, -1.8, -1.9, -1.9],[13.4, 14.3, 15.4, 15.8, 16.1, 16.4, 16.5, 16.6, 16.6, 16.7, 16.7, 16.6, 16.6, 16.5, 16.3, 16.2, 16.1, 15.8, 15.6, 15.4, 15.4, 15.5, 15.9, 16.4, 16.9, 17.5, 18.1, 18.8, 19.5, 20.2, 20.8, 21.1, 21.4, 21.5, 21.7, 21.8, 21.8],[0.091, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.079, 0.079, 0.079, 0.079, 0.079, 0.079, 0.078, 0.078, 0.078, 0.077, 0.077, 0.079, 0.086, 0.097, 0.11, 0.122, 0.133, 0.141, 0.147, 0.149, 0.147, 0.143, 0.139, 0.136, 0.136, 0.137, 0.14, 0.143, 0.148, 0.148]]];


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function sds(mod, sex, age, x) {
  if (isNaN(age) || (age === "") || isNaN(x) || (x <= 0)){
    return null;
  } else if (age < 1){
    idx = Math.floor(age*12);
  } else if (age < 2){
    idx = Math.floor(age*4) + 8;
  } else if (age < 21) {
    idx = Math.floor (age) + 14;
  } else {
    idx = 35;
  }
  f = (age - ages[idx]) / (ages[idx+1] - ages[idx]);

  l = mod[sex][0][idx] + f*(mod[sex][0][idx+1] - mod[sex][0][idx]);
  m = mod[sex][1][idx] + f*(mod[sex][1][idx+1] - mod[sex][1][idx]);
  s = mod[sex][2][idx] + f*(mod[sex][2][idx+1] - mod[sex][2][idx]);

  if (Math.abs(l) < 0.001) {
    res = round(Math.log(x/m)/s, 1);
  } else {
    res = round((Math.pow(x/m, l) -  1)/(l*s), 1);
  }
  return res;
}

/*HASTINGS.  MAX ERROR = .000001 from https://www.math.ucla.edu/~tom/distributions/normal.html (20190918)*/

function normalcdf(X){
  if (!(X) && !(X === 0)){
    return null;
  } else {
    var T=1/(1+.2316419*Math.abs(X));
    var D=.3989423*Math.exp(-X*X/2);
    var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
      Prob=1-Prob;
    }
    Prob=round(100*Prob,1);
    if(Prob == 0){
      Prob = "< 0.1";
    } else if(Prob == 100){
      Prob = "> 99.9";
    }
    return Prob;
  }
}

function normaldensity(x, mean, sd) {
  var a = x - mean;
  return Math.exp(-(a * a) / (2 * sd * sd)) / (Math.sqrt(2 * Math.PI) * sd);
}

