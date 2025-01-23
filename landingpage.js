const plansList = document.getElementById('plans-list');
const planDetails = document.getElementById('plan-details');

// Function to retrieve insurance plans data using Axios
async function getPlans() {
    try {
        const response = await axios.get('https://example.com/api/plans');
        const plans = response.data;
        renderPlansList(plans);
    } catch (error) {
        console.error(error);
    }
}

// Function to render insurance plans list
function renderPlansList(plans) {
    plansList.innerHTML = '';
    plans.forEach((plan) => {
        const li = document.createElement('li');
        li.textContent = plan.name;
        li.addEventListener('click', () => {
            getPlanDetails(plan.id);
        });
        plansList.appendChild(li);
    });
}

// Function to retrieve plan details data using Axios
async function getPlanDetails(planId) {
    try {
        const response = await axios.get(`https://example.com/api/plans/${planId}`);
        const plan = response.data;
        renderPlanDetails(plan);
    } catch (error) {
        console.error(error);
    }
}

// Function to render plan details
function renderPlanDetails(plan) {
    planDetails.innerText = `
        <h2>${plan.name}</h2>
        <p>${plan.description}</p>
        <p>Price: ${plan.price}</p>
    `;
}

// Call the getPlans function to retrieve insurance plans data
getPlans();