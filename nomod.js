//Find the right tab
let ico_links = document.getElementsByClassName("ico-link");
let alert_link;
for (let ico_link of ico_links) {
	if (ico_link.href == "https://zestedesavoir.com/pages/alertes/") {
		alert_link = ico_link;
		break;
	}
}

// Remove the notification badge
let notif_counts = alert_link.getElementsByClassName("notif-count");
for (const notif_count of notif_counts) {
	notif_count.style.display = "None";
}