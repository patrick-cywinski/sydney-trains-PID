// Array of T1 North Shore Line stations and Next Stop (ns) trigger points
const stations = [
  // --- Regular Stations (190m radius, Central 210m) ---
  { name: "hornsby", lat: -33.702928, lon: 151.098622, radius: 190, page: "hornsby.html" },
  { name: "waitara", lat: -33.709989, lon: 151.104228, radius: 190, page: "waitara.html" },
  { name: "wahroonga", lat: -33.717508, lon: 151.116936, radius: 190, page: "wahroonga.html" },
  { name: "warrawee", lat: -33.724189, lon: 151.121669, radius: 190, page: "warrawee.html" },
  { name: "turramurra", lat: -33.732206, lon: 151.128267, radius: 190, page: "turramurra.html" },
  { name: "pymble", lat: -33.744719, lon: 151.141981, radius: 190, page: "pymble.html" },
  { name: "gordon", lat: -33.756083, lon: 151.154444, radius: 190, page: "gordon.html" },
  { name: "killara", lat: -33.765475, lon: 151.161639, radius: 190, page: "killara.html" },
  { name: "lindfield", lat: -33.775056, lon: 151.168981, radius: 190, page: "lindfield.html" },
  { name: "roseville", lat: -33.784206, lon: 151.177242, radius: 190, page: "roseville.html" },
  { name: "chatswood", lat: -33.797731, lon: 151.180944, radius: 190, page: "chatswood.html" },
  { name: "artarmon", lat: -33.808847, lon: 151.185175, radius: 190, page: "artarmon.html" },
  { name: "st_leonards", lat: -33.822875, lon: 151.194256, radius: 190, page: "st_leonards.html" },
  { name: "wollstonecraft", lat: -33.831836, lon: 151.191744, radius: 190, page: "wollstonecraft.html" },
  { name: "waverton", lat: -33.838286, lon: 151.197800, radius: 190, page: "waverton.html" },
  { name: "north_sydney", lat: -33.841172, lon: 151.207222, radius: 190, page: "north_sydney.html" },
  { name: "milsons_point", lat: -33.845903, lon: 151.211819, radius: 190, page: "milsons_point.html" },
  { name: "wynyard", lat: -33.865833, lon: 151.205556, radius: 190, page: "wynyard.html" },
  { name: "townhall", lat: -33.873600, lon: 151.206900, radius: 190, page: "townhall.html" },
  { name: "central", lat: -33.884161, lon: 151.206825, radius: 210, page: "central.html" },

  // --- Hornsby to Central Next Stop (ns) Points (3.9m radius) ---
  { name: "nswaitara", lat: -33.705056, lon: 151.098453, radius: 3.9, page: "nswaitara.html" },
  { name: "nswahroonga", lat: -33.710803, lon: 151.105886, radius: 3.9, page: "nswahroonga.html" },
  { name: "nswarrawee", lat: -33.719142, lon: 151.118600, radius: 3.9, page: "nswarrawee.html" },
  { name: "nsturramurra", lat: -33.725356, lon: 151.122486, radius: 3.9, page: "nsturramurra.html" },
  { name: "nspymble", lat: -33.733631, lon: 151.129725, radius: 3.9, page: "nspymble.html" },
  { name: "nsgordon", lat: -33.745253, lon: 151.143694, radius: 3.9, page: "nsgordon.html" },
  { name: "nskillara", lat: -33.757542, lon: 151.155694, radius: 3.9, page: "nskillara.html" },
  { name: "nslindfield", lat: -33.766869, lon: 151.162800, radius: 3.9, page: "nslindfield.html" },
  { name: "nsroseville", lat: -33.777189, lon: 151.169881, radius: 3.9, page: "nsroseville.html" },
  { name: "nschatswood", lat: -33.784803, lon: 151.178269, radius: 3.9, page: "nschatswood.html" },
  { name: "nsartarmon", lat: -33.799653, lon: 151.181042, radius: 3.9, page: "nsartarmon.html" },
  { name: "nsst_leonards", lat: -33.809508, lon: 151.186456, radius: 3.9, page: "nsst_leonards.html" },
  { name: "nswollstonecraft", lat: -33.824628, lon: 151.194675, radius: 3.9, page: "nswollstonecraft.html" },
  { name: "nswaverton", lat: -33.833189, lon: 151.192881, radius: 3.9, page: "nswaverton.html" },
  { name: "nsnorth_sydney", lat: -33.839383, lon: 151.199206, radius: 3.9, page: "nsnorth_sydney.html" },
  { name: "nsmilsons_point", lat: -33.842078, lon: 151.209644, radius: 3.9, page: "nsmilsons_point.html" },
  { name: "nswynyard", lat: -33.847339, lon: 151.212436, radius: 3.9, page: "nswynyard.html" },
  { name: "nstownhall", lat: -33.866920, lon: 151.205420, radius: 3.9, page: "nstownhall.html" },
  { name: "nscentral", lat: -33.874594, lon: 151.206679, radius: 3.9, page: "nscentral.html" },

  // --- Central to Hornsby Next Stop (ns) Points (3.9m radius) ---
  { name: "ns_th_up", lat: -33.882569, lon: 151.207864, radius: 3.9, page: "nstownhall.html" },
  { name: "ns_wy_up", lat: -33.872556, lon: 151.204944, radius: 3.9, page: "nswynyard.html" },
  { name: "ns_mp_up", lat: -33.864667, lon: 151.205639, radius: 3.9, page: "nsmilsons_point.html" },
  { name: "ns_ns_up", lat: -33.844542, lon: 151.211325, radius: 3.9, page: "nsnorth_sydney.html" },
  { name: "ns_wv_up", lat: -33.840417, lon: 151.206306, radius: 3.9, page: "nswaverton.html" },
  { name: "ns_wc_up", lat: -33.837125, lon: 151.197200, radius: 3.9, page: "nswollstonecraft.html" },
  { name: "ns_st_up", lat: -33.830519, lon: 151.192133, radius: 3.9, page: "nsst_leonards.html" },
  { name: "ns_ar_up", lat: -33.821083, lon: 151.193911, radius: 3.9, page: "nsartarmon.html" },
  { name: "ns_ch_up", lat: -33.808131, lon: 151.184147, radius: 3.9, page: "nschatswood.html" },
  { name: "ns_ro_up", lat: -33.795656, lon: 151.180836, radius: 3.9, page: "nsroseville.html" },
  { name: "ns_li_up", lat: -33.783575, lon: 151.176119, radius: 3.9, page: "nslindfield.html" },
  { name: "ns_ki_up", lat: -33.773919, lon: 151.168103, radius: 3.9, page: "nskillara.html" },
  { name: "ns_go_up", lat: -33.764314, lon: 151.160786, radius: 3.9, page: "nsgordon.html" },
  { name: "ns_py_up", lat: -33.754639, lon: 151.153439, radius: 3.9, page: "nspymble.html" },
  { name: "ns_tu_up", lat: -33.744228, lon: 151.140750, radius: 3.9, page: "nsturramurra.html" },
  { name: "ns_wa_up", lat: -33.731206, lon: 151.127394, radius: 3.9, page: "nswarrawee.html" },
  { name: "ns_wh_up", lat: -33.723339, lon: 151.121139, radius: 3.9, page: "nswahroonga.html" },
  { name: "ns_wt_up", lat: -33.716539, lon: 151.115933, radius: 3.9, page: "nswaitara.html" },
  { name: "ns_ho_up", lat: -33.709006, lon: 151.102944, radius: 3.9, page: "nshornsby.html" }
];

const LAST_TARGET_KEY = "sydney_trains_last_target";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const toRad = (angle) => (angle * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function startTracking() {
  if (!navigator.geolocation) {
    console.error("Geolocation is not supported by your browser");
    return;
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 500,
    timeout: 10000
  };

  navigator.geolocation.watchPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      let lastTarget = sessionStorage.getItem(LAST_TARGET_KEY);

      for (let item of stations) {
        const distance = calculateDistance(userLat, userLon, item.lat, item.lon);

        if (distance <= item.radius) {
          if (lastTarget !== item.name) {
            console.log(`Triggered ${item.name}! Redirecting to ${item.page}...`);
            sessionStorage.setItem(LAST_TARGET_KEY, item.name);
            window.location.href = item.page;
          }
          return;
        }
      }

      // Clear lock if we move away from the last triggered target
      if (lastTarget) {
        const currentObj = stations.find(s => s.name === lastTarget);
        if (currentObj) {
          const distToLast = calculateDistance(userLat, userLon, currentObj.lat, currentObj.lon);
          if (distToLast > currentObj.radius * 2) {
            sessionStorage.removeItem(LAST_TARGET_KEY);
          }
        }
      }
    },
    (error) => {
      console.error("Geolocation error:", error.message);
    },
    options
  );
}

document.addEventListener("DOMContentLoaded", () => {
  startTracking();
});