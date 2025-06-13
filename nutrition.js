document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nutrition-form');
    const weightInput = document.getElementById('weight');
    const weightUnit = document.getElementById('weightUnit');
  
    const height1 = document.getElementById('height1'); 
    const height2 = document.getElementById('height2'); 
    const heightUnitToggle = document.getElementById('heightUnitToggle');
  
    const heightUnit1Label = document.getElementById('heightUnit1');
    const heightUnit2Label = document.getElementById('heightUnit2');
  
    const resultsDiv = document.getElementById('results');
    const caloriesSpan = document.getElementById('calories');
    const proteinSpan = document.getElementById('protein');
   
    const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));
   
  
    
    // Update height input placeholders and units based on toggle
    function updateHeightInputs() {
      if (heightUnitToggle.value === 'feet') {
        height1.placeholder = 'Feet';
        height2.placeholder = 'Inches';
        heightUnit1Label.textContent = 'ft';
        heightUnit2Label.textContent = 'in';
        height1.min = 0;
        height2.min = 0;
      } else {
        height1.placeholder = 'Meters';
        height2.placeholder = 'Centimeters';
        heightUnit1Label.textContent = 'm';
        heightUnit2Label.textContent = 'cm';
        height1.min = 0;
        height2.min = 0;
      }
      height1.value = '';
      height2.value = '';
    }
  
    // Convert weight to kilograms regardless of input unit
    function getWeightInKg() {
      let weight = parseFloat(weightInput.value);
      if (isNaN(weight) || weight <= 0) return null;
  
      if (weightUnit.value === 'lb') {
        weight = weight * 0.453592; // pounds to kg
      }
      return weight;
    }
  
    // Convert height to meters regardless of input unit
    function getHeightInMeters() {
      let h1 = parseFloat(height1.value);
      let h2 = parseFloat(height2.value);
      if (isNaN(h1) || h1 < 0) return null;
      if (isNaN(h2) || h2 < 0) h2 = 0;
  
      if (heightUnitToggle.value === 'feet') {
        // feet and inches to meters
        return (h1 * 0.3048) + (h2 * 0.0254);
      } else {
        // meters and centimeters to meters
        return h1 + (h2 / 100);
      }
    }
  
    weightInput.addEventListener('input', () => {
        // Remove leading zeros and enforce minimum of 1
        if (weightInput.value === '') return; // allow empty while typing
        let val = parseFloat(weightInput.value);
        if (isNaN(val) || val < 1) {
          weightInput.value = '1';
        } else {
          // Also remove leading zeros like '0012' -> '12'
          weightInput.value = val.toString();
        }
      });
      
  
    // Validate height inputs (no negatives)
    height1.addEventListener('input', () => {
      if (height1.value < 0) height1.value = 0;
    });
  
    height2.addEventListener('input', () => {
      if (height2.value < 0) height2.value = 0;
    });
  
    // Update height inputs when unit toggle changes
    heightUnitToggle.addEventListener('change', () => {
      updateHeightInputs();
    });
  
    // Initialize on load
    updateHeightInputs();
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
      
        const dob = document.getElementById('dob').value;
        if (!dob) {
          alert('Please enter your date of birth');
          return;
        }
      
        const weightKg = getWeightInKg();
        const heightMeters = getHeightInMeters();
      
        if (!weightKg) {
          alert('Please enter a valid weight (positive number)');
          return;
        }
      
        if (!heightMeters) {
          alert('Please enter valid height values');
          return;
        }
      
        const age = Math.floor((new Date() - new Date(dob)) / (1000 * 60 * 60 * 24 * 365.25));
      
        const calories = Math.round(25 * weightKg + 10 * age);
        const protein = Math.round(0.8 * weightKg);
      
        caloriesSpan.textContent = calories;
        proteinSpan.textContent = protein;
      
       
        console.log('Showing results modal');
        resultsModal.show();
      });
      
      
        
        
      });
      
    
  
