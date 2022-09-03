
const btn = document.querySelector(".get-activity")
let activityText = document.getElementById("activity-text")
let headerText = document.getElementById("header")



function getActivity() {
    activityText.classList.add("newActivity")
    headerText.classList.add("happyBot")
    headerText.textContent = "🏁 How about this? 🤩"
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        activityText.textContent = data.activity
    })
}

btn.addEventListener("click", getActivity)