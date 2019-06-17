function solution(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ''
    };

    if (obj.BMI < 18.5) {
        obj.status = 'underweight'
    } else if (obj.BMI < 25) {
        obj.status = 'normal'
    } else if (obj.BMI < 30) {
        obj.status = 'overweight'
    } else {
        obj.status = 'obese';
        obj.recommendation = 'admission required';
    }

    return obj;
}

console.log(solution('Honey Boo Boo', 9, 57, 137));