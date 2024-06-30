var selectedGender = '';

        function selectGender(gender) {
            selectedGender = gender;
            document.getElementById('maleBtn').classList.remove('active');
            document.getElementById('femaleBtn').classList.remove('active');
            document.getElementById(gender + 'Btn').classList.add('active');
        }

        function calculateBMI() {
            // Get input values
            var age = document.getElementById('age').value;
            var weightLb = document.getElementById('weight').value; // Weight in pounds
            var feet = document.getElementById('feet').value;
            var inches = document.getElementById('inches').value;

            // Convert height from feet and inches to meters (1 foot = 0.3048 meters, 1 inch = 0.0254 meters)
            var heightMeters = (feet * 0.3048) + (inches * 0.0254);

            // Convert weight from pounds to kilograms (1 lb = 0.453592 kg)
            var weightKg = weightLb * 0.453592;

            // Calculate BMI
            var bmi;
            if (selectedGender === 'male') {
                bmi = weightKg / Math.pow(heightMeters, 2);
            } else if (selectedGender === 'female') {
                bmi = weightKg / Math.pow(heightMeters, 2);
            } else {
                alert('Please select a gender.');
                return;
            }

            // Display result
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
            
            // Interpretation based on age
            var interpretation = interpretBMI(bmi, age);
            resultElement.innerHTML += '<br>' + interpretation;
        }

        function interpretBMI(bmi, age) {
            var interpretation = '';
            if (age < 18) {
                interpretation = 'BMI categories for children and teenagers are different from adults.';
            } else {
                if (bmi < 18.5) {
                    interpretation = 'Underweight';
                } else if (bmi >= 18.5 && bmi < 25) {
                    interpretation = 'Normal weight';
                } else if (bmi >= 25 && bmi < 30) {
                    interpretation = 'Overweight';
                } else {
                    interpretation = 'Obesity';
                }
            }
            return 'BMI Category: ' + interpretation;
        }