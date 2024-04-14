// Sample medicine database object (replace with your actual database)
const medicineDatabase = {
    "paracetamol": "Paracetamol is a commonly used medicine for treating pain and fever.",
    "ibuprofen": "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain and reduce inflammation.",
    "glymiciv m2": "glymiciv m2 is a combination medication used to manage type 2 diabetes. it contains a combination of two antidiabetic agents, which help control blood sugar levels by improving insulin sensitivity and reducing glucose production in the liver.",
    "pudin hara": "pudin hara is an ayurvedic medicine used for the relief of indigestion, gas, bloating, and stomach discomfort. it contains a combination of peppermint oil and menthol, which have carminative and digestive properties.",
    "cyclopalm": "cyclopalm is a combination medication used to relieve symptoms associated with irritable bowel syndrome (ibs), such as abdominal pain, cramps, bloating, and discomfort. it contains a combination of an antispasmodic and an antiflatulent agent.",
    "aptivate": "aptivate is a digestive enzyme supplement used to aid digestion and relieve symptoms such as bloating, gas, and indigestion. it contains a combination of enzymes that help break down carbohydrates, proteins, and fats in the digestive tract.",
    "lubrijoint plus": "lubrijoint plus is a nutritional supplement used to support joint health and reduce symptoms of osteoarthritis. it contains a combination of glucosamine, chondroitin, and methylsulfonylmethane (msm), which help maintain joint function and reduce inflammation.",
    "acne treatment": "acne treatment is a topical medication used to treat acne vulgaris. it contains active ingredients such as benzoyl peroxide, salicylic acid, or adapalene, which help reduce acne lesions, unclog pores, and prevent new acne formation.",
    "eris": "eris is an antihistamine medication used to relieve symptoms of allergies, such as sneezing, itching, watery eyes, and runny nose. it contains an active ingredient such as loratadine, cetirizine, or fexofenadine, which block the action of histamine in the body.",
    "vinglyn": "vinglyn is a medication used to relieve symptoms of motion sickness, such as nausea, vomiting, and dizziness. it contains an active ingredient such as dimenhydrinate or meclizine, which help prevent motion sickness by blocking signals to the brain.",
    "vogs 0.3": "vogs 0.3 is a topical medication used to treat fungal infections of the skin, such as athlete's foot, jock itch, and ringworm. it contains an antifungal agent such as clotrimazole, miconazole, or terbinafine, which help eliminate the fungus causing the infection.",
    "rantac": "rantac is a medication used to treat and prevent ulcers in the stomach and intestines, gastroesophageal reflux disease (gerd), and conditions that cause excess stomach acid production. it contains an active ingredient such as ranitidine, which reduces stomach acid production and relieves symptoms of heartburn and indigestion."
};

// Function to get medicine information
function getMedicineInfo() {
    const medicineInput = document.getElementById('medicineInput').value.toLowerCase(); // Convert input to lowercase
    const medicineDetails = document.getElementById('medicineDetails');

    if (medicineInput in medicineDatabase) {
        const medicineInfo = medicineDatabase[medicineInput];
        // Capitalize the first letter of the medicine name
        const capitalizedMedicineInput = medicineInput.charAt(0).toUpperCase() + medicineInput.slice(1);
        medicineDetails.innerHTML = `<strong>${capitalizedMedicineInput}:</strong> ${medicineInfo}`;
    } else {
        // Capitalize the first letter of the medicine name
        const capitalizedMedicineInput = medicineInput.charAt(0).toUpperCase() + medicineInput.slice(1);
        medicineDetails.innerHTML = `No information available for "${capitalizedMedicineInput}".`;
    }

    // Clear input box after searching
    document.getElementById('medicineInput').value = '';
}
