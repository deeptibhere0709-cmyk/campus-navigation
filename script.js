/* ==========================================
   CAMPUSCONNECT - COMPLETE SCRIPT.JS
   ARMIET SMART TWO-FLOOR NAVIGATION & ADMIN PORTAL
========================================== */

// --- INITIAL DEFAULT LOCATIONS (44) ---
const defaultLocations = [
    // GROUND FLOOR - LEVEL 00
    {
        name: "Chemistry Lab",
        floor: "ground",
        category: "lab",
        className: "chem",
        icon: "fa-flask",
        desc: "Equipped for applied chemistry, qualitative analysis, and titration experiments.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Physics Lab",
        floor: "ground",
        category: "lab",
        className: "physics",
        icon: "fa-atom",
        desc: "Optics, mechanics, spectrometer, and laser measurement test setups.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "BEE Lab",
        floor: "ground",
        category: "lab",
        className: "bee",
        icon: "fa-bolt",
        desc: "Basic Electrical Engineering test benches, circuit kits, and transformer tests.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Language Lab",
        floor: "ground",
        category: "lab",
        className: "language",
        icon: "fa-language",
        desc: "Interactive multimedia workstations for language training and verbal communication skills.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Mechanics Lab",
        floor: "ground",
        category: "lab",
        className: "mechanics",
        icon: "fa-gears",
        desc: "Engineering mechanics, centroid rigs, friction tests, and belt-drive mechanisms.",
        wing: "North Wing",
        nearestStairs: "East Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "HOD Cabin",
        floor: "ground",
        category: "office",
        className: "hod",
        icon: "fa-user-tie",
        desc: "Department Head office for academic inquiries, parent meetings, and faculty consultation.",
        wing: "North Wing",
        nearestStairs: "East Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Store Room",
        floor: "ground",
        category: "other",
        className: "store",
        icon: "fa-box",
        desc: "Central materials storage and laboratory replenishment inventory.",
        wing: "North Wing",
        nearestStairs: "East Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Admin Office",
        floor: "ground",
        category: "office",
        className: "admin",
        icon: "fa-building-user",
        desc: "Admissions, university registrations, fee counters, and student verification records.",
        wing: "West Wing",
        nearestStairs: "West Stairs",
        doorSide: "west",
        status: "available"
    },
    {
        name: "Main Entrance",
        floor: "ground",
        category: "common",
        className: "entrance",
        icon: "fa-door-open",
        desc: "Primary security checkpoint and campus entrance foyer with visitor check-in.",
        wing: "West Wing",
        nearestStairs: "West Stairs",
        doorSide: "west",
        status: "available"
    },
    {
        name: "Assembly Area",
        floor: "ground",
        category: "common",
        className: "assembly",
        icon: "fa-people-group",
        desc: "Spacious assembly zone for college ceremonies, briefings, and morning gatherings.",
        wing: "West Wing",
        nearestStairs: "West Stairs",
        doorSide: "west",
        status: "available"
    },
    {
        name: "Principal Cabin",
        floor: "ground",
        category: "office",
        className: "principal",
        icon: "fa-user-shield",
        desc: "Executive office of the College Principal and senior institutional administration.",
        wing: "West Wing",
        nearestStairs: "West Stairs",
        doorSide: "west",
        status: "available"
    },
    {
        name: "Common Room",
        floor: "ground",
        category: "common",
        className: "commonroom",
        icon: "fa-users",
        desc: "Recreational lounge space for students with seating and notice boards.",
        wing: "West Wing",
        nearestStairs: "West Stairs",
        doorSide: "west",
        status: "available"
    },
    {
        name: "Shop",
        floor: "ground",
        category: "common",
        className: "shop",
        icon: "fa-cart-shopping",
        desc: "Campus stationery store, printout services, journal sheets, and engineering supplies.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "ETC Lab",
        floor: "ground",
        category: "lab",
        className: "etc",
        icon: "fa-microchip",
        desc: "Electronics and Telecommunication prototyping equipment and oscilloscope stations.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "Dark Room Lab",
        floor: "ground",
        category: "lab",
        className: "darklab",
        icon: "fa-camera",
        desc: "Optics testing, spectroscopy, and light-sensitive physics experiments.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "Drone Lab",
        floor: "ground",
        category: "lab",
        className: "dronelab",
        icon: "fa-helicopter",
        desc: "UAV fabrication, drone calibration, flight telemetry, and robotics testing.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "C1",
        floor: "ground",
        category: "classroom",
        className: "c1",
        icon: "fa-chalkboard",
        desc: "Smart lecture hall C1 equipped with high-resolution digital projection.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "occupied"
    },
    {
        name: "C2",
        floor: "ground",
        category: "classroom",
        className: "c2",
        icon: "fa-chalkboard",
        desc: "Undergraduate engineering classroom C2 with multimedia board.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "Lab 3",
        floor: "ground",
        category: "lab",
        className: "lab3",
        icon: "fa-vial",
        desc: "General computing and hardware experimental lab 3.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "Lab 2",
        floor: "ground",
        category: "lab",
        className: "lab2",
        icon: "fa-vial",
        desc: "Algorithm programming and software development lab 2.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "Lab 1",
        floor: "ground",
        category: "lab",
        className: "lab1",
        icon: "fa-vial",
        desc: "High-throughput foundational computer programming lab 1.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "AR/VR Lab",
        floor: "ground",
        category: "lab",
        className: "arvr",
        icon: "fa-vr-cardboard",
        desc: "Spatial computing workstations, VR headsets, and 3D immersive simulation setups.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "Ground Floor Stairs Left",
        floor: "ground",
        category: "stairs",
        className: "ground-stairs-left",
        icon: "fa-stairs",
        desc: "West staircase connecting Ground Floor with Level 01 near Computer Lab.",
        wing: "West Wing",
        nearestStairs: "Self",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Ground Floor Stairs Right",
        floor: "ground",
        category: "stairs",
        className: "ground-stairs-right",
        icon: "fa-stairs",
        desc: "East staircase connecting Ground Floor with Level 01 near Room C11 & Drawing Room.",
        wing: "East Wing",
        nearestStairs: "Self",
        doorSide: "north",
        status: "available"
    },

    // FIRST FLOOR - LEVEL 01
    {
        name: "Computer Lab",
        floor: "first",
        category: "lab",
        className: "computerlab",
        icon: "fa-computer",
        desc: "Advanced computing center for cloud computing, cybersecurity, and coding practicals.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Exam Section",
        floor: "first",
        category: "office",
        className: "examsection",
        icon: "fa-file-circle-check",
        desc: "Examination administration, university results, revaluation, and hall ticket issuance.",
        wing: "North Wing",
        nearestStairs: "West Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "Placement Cell",
        floor: "first",
        category: "office",
        className: "placement",
        icon: "fa-briefcase",
        desc: "Corporate recruitment drives, interview cabins, and student internship desk.",
        wing: "North Wing",
        nearestStairs: "East Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "UG 19",
        floor: "first",
        category: "classroom",
        className: "ug19",
        icon: "fa-door-closed",
        desc: "Undergraduate degree lecture theater UG 19 with acoustic sound system.",
        wing: "North Wing",
        nearestStairs: "East Stairs",
        doorSide: "north",
        status: "available"
    },
    {
        name: "UG 18",
        floor: "first",
        category: "classroom",
        className: "ug18",
        icon: "fa-door-closed",
        desc: "Tiered seating lecture classroom UG 18 for senior division engineering courses.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "UG 16",
        floor: "first",
        category: "classroom",
        className: "ug16",
        icon: "fa-door-closed",
        desc: "Undergraduate classroom UG 16 with smart interactive whiteboard.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "occupied"
    },
    {
        name: "UG 15 Lab",
        floor: "first",
        category: "lab",
        className: "ug15lab",
        icon: "fa-flask",
        desc: "Specialized undergraduate research and embedded systems project laboratory.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "Room C11",
        floor: "first",
        category: "classroom",
        className: "roomc11",
        icon: "fa-chalkboard",
        desc: "Spacious classroom C11 for departmental tutorials and seminar talks.",
        wing: "East Wing",
        nearestStairs: "East Stairs",
        doorSide: "east",
        status: "available"
    },
    {
        name: "Lift",
        floor: "first",
        category: "stairs",
        className: "lift",
        icon: "fa-elevator",
        desc: "Elevator connecting Ground Floor and Level 01 with wheelchair accessibility.",
        wing: "Central Core",
        nearestStairs: "Self",
        doorSide: "center",
        status: "available"
    },
    {
        name: "IT Lab",
        floor: "first",
        category: "lab",
        className: "itlab",
        icon: "fa-laptop-code",
        desc: "Information Technology lab for full-stack web development and database management.",
        wing: "Central Core",
        nearestStairs: "East Stairs",
        doorSide: "center",
        status: "available"
    },
    {
        name: "MMS Hall",
        floor: "first",
        category: "common",
        className: "mmshall",
        icon: "fa-person-chalkboard",
        desc: "Executive conference auditorium and symposium hall for academic presentations.",
        wing: "Central Core",
        nearestStairs: "West Stairs",
        doorSide: "center",
        status: "available"
    },
    {
        name: "AIML Lab 14",
        floor: "first",
        category: "lab",
        className: "aiml14",
        icon: "fa-robot",
        desc: "Equipped with high-performance GPU workstations for machine learning and AI algorithms.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "AIML Lab 15",
        floor: "first",
        category: "lab",
        className: "aiml15",
        icon: "fa-robot",
        desc: "Deep Learning, neural computing, and computer vision experimental setup.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "maintenance"
    },
    {
        name: "CESE",
        floor: "first",
        category: "classroom",
        className: "cese",
        icon: "fa-door-closed",
        desc: "Computer Engineering & Software Engineering departmental classroom.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "CETE",
        floor: "first",
        category: "classroom",
        className: "cete",
        icon: "fa-door-closed",
        desc: "Computer Engineering & Telecommunication departmental classroom.",
        wing: "South Wing",
        nearestStairs: "West Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "UG 08",
        floor: "first",
        category: "classroom",
        className: "ug08",
        icon: "fa-door-closed",
        desc: "Undergraduate lecture hall UG 08 with audio-visual system.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "UG 09",
        floor: "first",
        category: "classroom",
        className: "ug09",
        icon: "fa-door-closed",
        desc: "Undergraduate lecture classroom UG 09 for semester lecture tracks.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "Drawing Room",
        floor: "first",
        category: "classroom",
        className: "drawing",
        icon: "fa-pencil",
        desc: "Engineering graphics and drafting studio with drafting tables and CAD workstations.",
        wing: "South Wing",
        nearestStairs: "East Stairs",
        doorSide: "south",
        status: "available"
    },
    {
        name: "First Floor Stairs Top",
        floor: "first",
        category: "stairs",
        className: "first-stairs-top",
        icon: "fa-stairs",
        desc: "West staircase connecting to Ground Floor near Chemistry & Physics Labs.",
        wing: "West Wing",
        nearestStairs: "Self",
        doorSide: "north",
        status: "available"
    },
    {
        name: "First Floor Stairs Right",
        floor: "first",
        category: "stairs",
        className: "first-stairs-right",
        icon: "fa-stairs",
        desc: "East staircase connecting to Ground Floor near Drone Lab & Dark Room.",
        wing: "East Wing",
        nearestStairs: "Self",
        doorSide: "east",
        status: "available"
    }
];

// --- ACTIVE LOCATIONS DATABASE (MANAGED VIA LOCALSTORAGE) ---
let locations = [];

function loadLocationsDatabase() {
    const saved = localStorage.getItem("campusconnect_custom_locations");
    if (saved) {
        try {
            locations = JSON.parse(saved);
        } catch (e) {
            locations = [...defaultLocations];
        }
    } else {
        locations = [...defaultLocations];
    }
}
loadLocationsDatabase();

function persistLocationsDatabase() {
    localStorage.setItem("campusconnect_custom_locations", JSON.stringify(locations));
    if (typeof syncMapRoomElements === "function") syncMapRoomElements();
    updateMapStatusDots();
    populateSelects();
    renderDirectory();
    updateDashboardKpis();
    if (document.getElementById("statRoomCount")) {
        document.getElementById("statRoomCount").textContent = `${locations.length}+`;
    }
}

// --- STATE MANAGEMENT ---
const state = {
    currentFloor: "ground",
    activeRoute: null,
    currentLeg: null,
    isSpeaking: false,
    zoomLevel: 1,
    accessibleMode: false,
    isAdminLoggedIn: false,
    adminActiveTab: "overview"
};

// Check saved admin session
if (localStorage.getItem("campusconnect_admin_session") === "true") {
    state.isAdminLoggedIn = true;
}

// --- DOM ELEMENTS (PUBLIC) ---
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const clearBtn = document.getElementById("clearBtn");

const floorButtons = document.querySelectorAll(".floor-btn");
const floorMaps = document.querySelectorAll(".floor-map");

const startSelect = document.getElementById("startLocation");
const destinationSelect = document.getElementById("destinationLocation");
const routeBtn = document.getElementById("routeBtn");
const swapBtn = document.getElementById("swapBtn");
const resetBtn = document.getElementById("resetBtn");
const routeResult = document.getElementById("routeResult");
const accessibleToggle = document.getElementById("accessibleToggle");

const crossFloorBanner = document.getElementById("crossFloorBanner");
const crossFloorText = document.getElementById("crossFloorText");
const legTabGround = document.getElementById("legTabGround");
const legTabFirst = document.getElementById("legTabFirst");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const themeToggle = document.getElementById("themeToggle");

const directorySearchInput = document.getElementById("directorySearchInput");
const filterButtons = document.querySelectorAll(".location-filter-btn");
const locationGrid = document.getElementById("locationGrid");

// Zoom controls
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");
const mapViewport = document.getElementById("mapViewport");

// Room Details Modal
const roomModalBackdrop = document.getElementById("roomModalBackdrop");
const roomModal = document.getElementById("roomModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalFloor = document.getElementById("modalFloor");
const modalStatusBadge = document.getElementById("modalStatusBadge");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalFloorMeta = document.getElementById("modalFloorMeta");
const modalWing = document.getElementById("modalWing");
const modalStairs = document.getElementById("modalStairs");
const modalSetStart = document.getElementById("modalSetStart");
const modalSetDest = document.getElementById("modalSetDest");
const modalRouteFromEntrance = document.getElementById("modalRouteFromEntrance");

// Toast
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// Campus Live Broadcast Notice Bar
const campusBroadcastBar = document.getElementById("campusBroadcastBar");
const broadcastText = document.getElementById("broadcastText");
const closeBroadcastBtn = document.getElementById("closeBroadcastBtn");

// --- DOM ELEMENTS (ADMIN PORTAL) ---
const publicViewContainer = document.getElementById("publicViewContainer");
const adminPortalWrapper = document.getElementById("adminPortalWrapper");
const adminNavBtn = document.getElementById("adminNavBtn");
const adminNavText = document.getElementById("adminNavText");
const mobileAdminBtn = document.getElementById("mobileAdminBtn");
const footerAdminLink = document.getElementById("footerAdminLink");

const adminExitBtn = document.getElementById("adminExitBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");

const adminLoginModal = document.getElementById("adminLoginModal");
const closeLoginModalBtn = document.getElementById("closeLoginModalBtn");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminUsername = document.getElementById("adminUsername");
const adminPassword = document.getElementById("adminPassword");
const btnQuickDemoLogin = document.getElementById("btnQuickDemoLogin");

const adminNavItems = document.querySelectorAll(".admin-nav-item");
const adminTabPanes = document.querySelectorAll(".admin-tab-pane");

const btnQuickAddRoom = document.getElementById("btnQuickAddRoom");
const btnAddNewLocation = document.getElementById("btnAddNewLocation");
const adminRoomSearch = document.getElementById("adminRoomSearch");
const adminFloorFilter = document.getElementById("adminFloorFilter");
const adminCategoryFilter = document.getElementById("adminCategoryFilter");
const adminTableBody = document.getElementById("adminTableBody");

const locationEditModalBackdrop = document.getElementById("locationEditModalBackdrop");
const closeLocationEditBtn = document.getElementById("closeLocationEditBtn");
const locationEditForm = document.getElementById("locationEditForm");
const editOriginalName = document.getElementById("editOriginalName");
const editModalHeading = document.getElementById("editModalHeading");
const editModalActionTitle = document.getElementById("editModalActionTitle");
const editModalIconPreview = document.getElementById("editModalIconPreview");
const editLocationName = document.getElementById("editLocationName");
const editLocationFloor = document.getElementById("editLocationFloor");
const editLocationCategory = document.getElementById("editLocationCategory");
const editLocationWing = document.getElementById("editLocationWing");
const editLocationDoorSide = document.getElementById("editLocationDoorSide");
const editLocationIcon = document.getElementById("editLocationIcon");
const editLocationDesc = document.getElementById("editLocationDesc");
const editLocationStatus = document.getElementById("editLocationStatus");
const btnSaveLocation = document.getElementById("btnSaveLocation");
const btnCancelEditLocation = document.getElementById("btnCancelEditLocation");

// Class Sequence DOM Elements
const btnGoToSequence = document.getElementById("btnGoToSequence");
const btnResetClassSequence = document.getElementById("btnResetClassSequence");
const btnSaveClassSequence = document.getElementById("btnSaveClassSequence");
const adminSequenceSearch = document.getElementById("adminSequenceSearch");
const adminSequenceScope = document.getElementById("adminSequenceScope");
const btnSequenceAddClass = document.getElementById("btnSequenceAddClass");
const adminSequenceList = document.getElementById("adminSequenceList");

const noticeTextInput = document.getElementById("noticeTextInput");
const noticeActiveCheck = document.getElementById("noticeActiveCheck");
const btnPublishNotice = document.getElementById("btnPublishNotice");
const adminNoticesList = document.getElementById("adminNoticesList");

const adminStatusGrid = document.getElementById("adminStatusGrid");

const btnExportJson = document.getElementById("btnExportJson");
const btnImportJson = document.getElementById("btnImportJson");
const importJsonFileInput = document.getElementById("importJsonFileInput");
const btnResetDefaults = document.getElementById("btnResetDefaults");

let activeModalLocation = null;

/* ==========================================
   UTILITY HELPERS
========================================== */
function findLocation(name) {
    if (!name) return null;
    return locations.find(loc => loc.name.toLowerCase() === name.toLowerCase()) || null;
}

function showToast(message, iconClass = "fa-circle-check") {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    const icon = toast.querySelector(".toast-icon");
    if (icon) icon.className = `fa-solid ${iconClass} toast-icon`;

    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

/* ==========================================
   THEME TOGGLE
========================================== */
function initTheme() {
    const savedTheme = localStorage.getItem("campusconnect_theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("campusconnect_theme", isDark ? "dark" : "light");
        themeToggle.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
        showToast(isDark ? "Dark mode enabled" : "Light mode enabled", isDark ? "fa-moon" : "fa-sun");
    });
}
initTheme();

/* ==========================================
   CAMPUS NOTICES & BROADCAST SYSTEM
========================================== */
let campusNotices = [
    {
        id: "notice-1",
        text: "Welcome to ARMIET Smart Campus Navigation & Wayfinding Portal. Real-time pathfinding across all floors is active.",
        isActive: true,
        createdAt: "Today"
    }
];

function loadCampusNotices() {
    const saved = localStorage.getItem("campusconnect_admin_notices");
    if (saved) {
        try {
            campusNotices = JSON.parse(saved);
        } catch (e) {
            // fallback
        }
    }
    const activeNotice = campusNotices.find(n => n.isActive);
    if (activeNotice && campusBroadcastBar && broadcastText) {
        broadcastText.textContent = activeNotice.text;
        campusBroadcastBar.style.display = "block";
    }
}
loadCampusNotices();

if (closeBroadcastBtn && campusBroadcastBar) {
    closeBroadcastBtn.addEventListener("click", () => {
        campusBroadcastBar.style.display = "none";
    });
}

function persistCampusNotices() {
    localStorage.setItem("campusconnect_admin_notices", JSON.stringify(campusNotices));
    const activeNotice = campusNotices.find(n => n.isActive);
    if (activeNotice && campusBroadcastBar && broadcastText) {
        broadcastText.textContent = activeNotice.text;
        campusBroadcastBar.style.display = "block";
    } else if (campusBroadcastBar) {
        campusBroadcastBar.style.display = "none";
    }
    renderAdminNoticesList();
}

/* ==========================================
   FLOOR SWITCHING
========================================== */
function switchFloor(floorName, isAutoSwitched = false) {
    state.currentFloor = floorName;

    floorButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.floor === floorName);
    });

    floorMaps.forEach(map => {
        map.classList.toggle("active-floor", map.dataset.floor === floorName);
    });

    if (state.activeRoute && state.activeRoute.isCrossFloor) {
        if (legTabGround) legTabGround.classList.toggle("active", floorName === "ground");
        if (legTabFirst) legTabFirst.classList.toggle("active", floorName === "first");
    }

    renderRouteForCurrentFloor();

    if (!isAutoSwitched) {
        showToast(`Switched to ${floorName === "ground" ? "Ground Floor (L00)" : "First Floor (L01)"}`, "fa-layer-group");
    }
}

floorButtons.forEach(button => {
    button.addEventListener("click", () => {
        switchFloor(button.dataset.floor);
    });
});

if (legTabGround) {
    legTabGround.addEventListener("click", () => switchFloor("ground"));
}
if (legTabFirst) {
    legTabFirst.addEventListener("click", () => switchFloor("first"));
}

/* ==========================================
   POPULATE DROPDOWNS
========================================== */
function populateSelects() {
    if (!startSelect || !destinationSelect) return;

    startSelect.innerHTML = '<option value="">Choose starting point...</option>';
    destinationSelect.innerHTML = '<option value="">Choose destination...</option>';

    const groundGroupStart = document.createElement("optgroup");
    groundGroupStart.label = "Ground Floor (Level 00)";
    const firstGroupStart = document.createElement("optgroup");
    firstGroupStart.label = "First Floor (Level 01)";

    const groundGroupDest = document.createElement("optgroup");
    groundGroupDest.label = "Ground Floor (Level 00)";
    const firstGroupDest = document.createElement("optgroup");
    firstGroupDest.label = "First Floor (Level 01)";

    const sorted = [...locations].sort((a, b) => a.name.localeCompare(b.name));

    sorted.forEach(loc => {
        const optStart = document.createElement("option");
        optStart.value = loc.name;
        optStart.textContent = `${loc.name} (${loc.floor === "ground" ? "L00" : "L01"})`;

        const optDest = document.createElement("option");
        optDest.value = loc.name;
        optDest.textContent = `${loc.name} (${loc.floor === "ground" ? "L00" : "L01"})`;

        if (loc.floor === "ground") {
            groundGroupStart.appendChild(optStart);
            groundGroupDest.appendChild(optDest);
        } else {
            firstGroupStart.appendChild(optStart);
            firstGroupDest.appendChild(optDest);
        }
    });

    startSelect.appendChild(groundGroupStart);
    startSelect.appendChild(firstGroupStart);
    destinationSelect.appendChild(groundGroupDest);
    destinationSelect.appendChild(firstGroupDest);
}
populateSelects();

/* ==========================================
   FLOOR LOCATION MAP HELPERS & SYNC
========================================== */
function findFloorLocationBtn(locationName) {
    if (!locationName) return null;
    const cleanName = locationName.toLowerCase().trim();
    const allBtns = document.querySelectorAll(".floor-location[data-location]");
    for (let i = 0; i < allBtns.length; i++) {
        if ((allBtns[i].dataset.location || "").toLowerCase().trim() === cleanName) {
            return allBtns[i];
        }
    }
    return null;
}

function syncMapRoomElements() {
    const groundContainer = document.getElementById("groundInteractiveFloor");
    const firstContainer = document.getElementById("firstInteractiveFloor");
    if (!groundContainer || !firstContainer) return;

    locations.forEach((loc, index) => {
        const container = loc.floor === "first" ? firstContainer : groundContainer;
        let btn = findFloorLocationBtn(loc.name);

        if (!btn) {
            // Room does not exist in HTML map, dynamically generate element
            btn = document.createElement("button");
            btn.className = `floor-location custom-added-room ${loc.className || ''}`;
            btn.dataset.location = loc.name;
            btn.dataset.category = loc.category || 'classroom';

            // Calculate position in corresponding wing
            let top = "12%", left = "50%";
            const wingOffset = ((index * 13) % 65) + 12;
            if ((loc.wing || "").includes("North")) {
                top = "6%";
                left = `${wingOffset}%`;
            } else if ((loc.wing || "").includes("South")) {
                top = "86%";
                left = `${wingOffset}%`;
            } else if ((loc.wing || "").includes("West")) {
                left = "5%";
                top = `${Math.min(78, 20 + wingOffset * 0.8)}%`;
            } else if ((loc.wing || "").includes("East")) {
                left = "86%";
                top = `${Math.min(78, 20 + wingOffset * 0.8)}%`;
            } else {
                left = `${Math.min(75, 25 + (index % 4) * 15)}%`;
                top = "48%";
            }
            btn.style.left = left;
            btn.style.top = top;

            btn.innerHTML = `
                <span class="status-dot ${loc.status || 'available'}"></span>
                <i class="fa-solid ${loc.icon || 'fa-chalkboard'}"></i>
                <span>${loc.name}</span>
            `;

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                openLocationModal(loc);
            });

            container.appendChild(btn);
        } else {
            // Update existing button
            let labelSpan = btn.querySelector("span:not(.status-dot)");
            if (labelSpan) labelSpan.textContent = loc.name;
            let iconEl = btn.querySelector("i");
            if (iconEl && loc.icon) iconEl.className = `fa-solid ${loc.icon}`;
            btn.dataset.category = loc.category || 'classroom';
            btn.style.display = "";
        }
    });

    // Hide or remove deleted rooms
    document.querySelectorAll(".floor-location[data-location]").forEach(btn => {
        const locName = btn.dataset.location;
        const exists = locations.some(l => l.name.toLowerCase() === (locName || "").toLowerCase().trim());
        if (!exists) {
            if (btn.classList.contains("custom-added-room")) {
                btn.remove();
            } else {
                btn.style.display = "none";
            }
        }
    });
}

function updateMapStatusDots() {
    locations.forEach(loc => {
        const btn = findFloorLocationBtn(loc.name);
        if (btn) {
            let dot = btn.querySelector(".status-dot");
            if (!dot) {
                dot = document.createElement("span");
                dot.className = "status-dot";
                btn.prepend(dot);
            }
            dot.className = `status-dot ${loc.status || 'available'}`;
            btn.dataset.status = loc.status || 'available';
        }
    });
}
syncMapRoomElements();
updateMapStatusDots();

/* ==========================================
   DYNAMIC CAMPUS DIRECTORY
========================================== */
function renderDirectory(filterCategory = "all", searchQuery = "") {
    if (!locationGrid) return;
    locationGrid.innerHTML = "";

    const query = searchQuery.toLowerCase().trim();

    const filtered = locations.filter(loc => {
        const matchesCategory =
            filterCategory === "all" ||
            loc.category === filterCategory ||
            (filterCategory === "stairs" && (loc.category === "stairs" || loc.name.includes("Stairs") || loc.name.includes("Lift")));

        const matchesSearch =
            !query ||
            loc.name.toLowerCase().includes(query) ||
            loc.desc.toLowerCase().includes(query) ||
            loc.wing.toLowerCase().includes(query) ||
            (loc.floor === "ground" ? "ground floor level 00 l00" : "first floor level 01 l01").includes(query);

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        locationGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 32px; margin-bottom: 12px; opacity: 0.5;"></i>
                <h4 style="font-size: 16px; margin-bottom: 6px; color: var(--dark);">No locations found</h4>
                <p style="font-size: 13px;">Try another keyword or reset the category filter.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(loc => {
        const card = document.createElement("div");
        card.className = "location-card";
        card.dataset.location = loc.name;
        card.dataset.category = loc.category;

        const floorBadgeClass = loc.floor === "ground" ? "tag-ground" : "tag-first";
        const floorText = loc.floor === "ground" ? "Ground (L00)" : "1st Floor (L01)";
        const statusText = loc.status === "occupied" ? "In Class" : (loc.status === "maintenance" ? "Maintenance" : "Available");
        const statusClass = loc.status === "occupied" ? "occupied" : (loc.status === "maintenance" ? "maintenance" : "");

        card.innerHTML = `
            <div class="location-card-icon">
                <i class="fa-solid ${loc.icon}"></i>
            </div>
            <div class="location-card-content">
                <div class="card-tags">
                    <span class="card-tag ${floorBadgeClass}">${floorText}</span>
                    <span class="card-tag" style="background: var(--background); color: var(--muted);">${loc.category.toUpperCase()}</span>
                    <span class="status-badge-inline ${statusClass}">${statusText}</span>
                </div>
                <h3>${loc.name}</h3>
                <p>${loc.desc}</p>
            </div>
            <i class="fa-solid fa-arrow-right card-arrow"></i>
        `;

        card.addEventListener("click", () => {
            openLocationModal(loc);
        });

        locationGrid.appendChild(card);
    });
}
renderDirectory();

if (directorySearchInput) {
    directorySearchInput.addEventListener("input", (e) => {
        const activeFilter = document.querySelector(".location-filter-btn.active")?.dataset.filter || "all";
        renderDirectory(activeFilter, e.target.value);
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderDirectory(btn.dataset.filter, directorySearchInput ? directorySearchInput.value : "");
    });
});

/* ==========================================
   ROOM DETAILS MODAL
========================================== */
function openLocationModal(loc) {
    if (!loc || !roomModalBackdrop) return;
    activeModalLocation = loc;

    if (modalName) modalName.textContent = loc.name;
    if (modalDesc) modalDesc.textContent = loc.desc;
    if (modalCategory) modalCategory.textContent = loc.category.toUpperCase();
    if (modalFloor) modalFloor.textContent = loc.floor === "ground" ? "Ground Floor" : "First Floor";
    if (modalFloorMeta) modalFloorMeta.textContent = loc.floor === "ground" ? "Ground Floor (L00)" : "First Floor (L01)";
    if (modalWing) modalWing.textContent = loc.wing || "Campus Wing";
    if (modalStairs) modalStairs.textContent = loc.nearestStairs || "West Stairs";

    if (modalStatusBadge) {
        const statusText = loc.status === "occupied" ? "In Class / Busy" : (loc.status === "maintenance" ? "Under Maintenance" : "Available / Open");
        modalStatusBadge.textContent = statusText;
        modalStatusBadge.className = `modal-tag status-badge-inline ${loc.status || 'available'}`;
    }

    if (modalIcon) {
        modalIcon.innerHTML = `<i class="fa-solid ${loc.icon}"></i>`;
    }

    roomModalBackdrop.classList.add("show");
}

function closeLocationModal() {
    if (roomModalBackdrop) roomModalBackdrop.classList.remove("show");
    activeModalLocation = null;
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeLocationModal);
if (roomModalBackdrop) {
    roomModalBackdrop.addEventListener("click", (e) => {
        if (e.target === roomModalBackdrop) closeLocationModal();
    });
}

if (modalSetStart) {
    modalSetStart.addEventListener("click", () => {
        if (activeModalLocation && startSelect) {
            startSelect.value = activeModalLocation.name;
            closeLocationModal();
            highlightRoom(activeModalLocation.name);
            showToast(`Starting point set to ${activeModalLocation.name}`);
            if (destinationSelect.value && destinationSelect.value !== activeModalLocation.name) {
                calculateRoute();
            }
        }
    });
}

if (modalSetDest) {
    modalSetDest.addEventListener("click", () => {
        if (activeModalLocation && destinationSelect) {
            destinationSelect.value = activeModalLocation.name;
            closeLocationModal();
            highlightRoom(activeModalLocation.name);
            showToast(`Destination set to ${activeModalLocation.name}`);
            if (startSelect.value && startSelect.value !== activeModalLocation.name) {
                calculateRoute();
            }
        }
    });
}

if (modalRouteFromEntrance) {
    modalRouteFromEntrance.addEventListener("click", () => {
        if (activeModalLocation) {
            if (startSelect) startSelect.value = "Main Entrance";
            if (destinationSelect) destinationSelect.value = activeModalLocation.name;
            closeLocationModal();
            calculateRoute();
            showToast(`Routing from Main Entrance to ${activeModalLocation.name}`);
        }
    });
}

/* ==========================================
   MAP LOCATION CLICKS & HIGHLIGHTING
========================================== */
function highlightRoom(locationName) {
    const loc = findLocation(locationName);
    if (!loc) return;

    switchFloor(loc.floor, true);

    setTimeout(() => {
        document.querySelectorAll(".floor-location").forEach(el => {
            el.classList.remove("active");
        });

        const targetEl = document.querySelector(`.floor-location[data-location="${loc.name}"]`);
        if (targetEl) {
            targetEl.classList.add("active");
            targetEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }, 120);
}

document.querySelectorAll(".floor-location[data-location]").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const loc = findLocation(btn.dataset.location);
        if (loc) {
            openLocationModal(loc);
        }
    });
});

/* ==========================================
   SEARCH & AUTOCOMPLETE
========================================== */
function renderSuggestions(query) {
    if (!suggestions) return;
    const clean = query.toLowerCase().trim();

    if (!clean) {
        suggestions.style.display = "none";
        return;
    }

    const matches = locations.filter(loc =>
        loc.name.toLowerCase().includes(clean) ||
        loc.desc.toLowerCase().includes(clean) ||
        loc.wing.toLowerCase().includes(clean)
    ).slice(0, 7);

    if (matches.length === 0) {
        suggestions.innerHTML = `
            <div class="suggestion-item">
                <div class="suggestion-icon-wrap"><i class="fa-solid fa-circle-question"></i></div>
                <div class="suggestion-text">
                    <strong>No locations matching "${clean}"</strong>
                    <small>Try searching for Lab, Classroom, Stairs or Admin</small>
                </div>
            </div>
        `;
        suggestions.style.display = "block";
        return;
    }

    suggestions.innerHTML = matches.map(loc => {
        const floorText = loc.floor === "ground" ? "Ground (L00)" : "1st Floor (L01)";
        return `
            <div class="suggestion-item" data-location="${loc.name}">
                <div class="suggestion-icon-wrap"><i class="fa-solid ${loc.icon}"></i></div>
                <div class="suggestion-text">
                    <strong>${loc.name}</strong>
                    <small>${floorText} &bull; ${loc.wing}</small>
                </div>
                <span class="suggestion-badge">${loc.category.toUpperCase()}</span>
            </div>
        `;
    }).join("");

    suggestions.style.display = "block";

    suggestions.querySelectorAll(".suggestion-item[data-location]").forEach(item => {
        item.addEventListener("click", () => {
            const locName = item.dataset.location;
            const loc = findLocation(locName);
            if (searchInput) searchInput.value = locName;
            suggestions.style.display = "none";
            if (loc) openLocationModal(loc);
        });
    });
}

if (searchInput) {
    searchInput.addEventListener("input", (e) => renderSuggestions(e.target.value));
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        if (suggestions) suggestions.style.display = "none";
    });
}

// Hero quick tags
document.querySelectorAll(".quick-tag[data-target]").forEach(tag => {
    tag.addEventListener("click", () => {
        const target = tag.dataset.target;
        const loc = findLocation(target);
        if (loc) {
            const mapSection = document.getElementById("map");
            if (mapSection) mapSection.scrollIntoView({ behavior: "smooth" });
            highlightRoom(target);
            openLocationModal(loc);
        }
    });
});

// Preset buttons
document.querySelectorAll(".preset-btn[data-start]").forEach(btn => {
    btn.addEventListener("click", () => {
        const start = btn.dataset.start;
        const dest = btn.dataset.dest;
        if (startSelect) startSelect.value = start;
        if (destinationSelect) destinationSelect.value = dest;
        calculateRoute();
    });
});

/* ==========================================
   CORRIDOR GRAPH & PATHFINDING ENGINE
========================================== */
function getRoomCenter(element, container) {
    const elRect = element.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    return {
        x: elRect.left - contRect.left + elRect.width / 2,
        y: elRect.top - contRect.top + elRect.height / 2
    };
}

function calculateCorridorPoints(startPos, endPos, startLoc, endLoc, floorMap) {
    const mapWidth = floorMap.offsetWidth;
    const mapHeight = floorMap.offsetHeight;

    const northHallY = mapHeight * 0.19;
    const southHallY = mapHeight * 0.81;
    const westHallX = mapWidth * 0.14;
    const eastHallX = mapWidth * 0.86;

    function getAttachingCorridor(pos, loc) {
        if (loc && loc.doorSide) {
            if (loc.doorSide === "north") return { x: pos.x, y: northHallY };
            if (loc.doorSide === "south") return { x: pos.x, y: southHallY };
            if (loc.doorSide === "west") return { x: westHallX, y: pos.y };
            if (loc.doorSide === "east") return { x: eastHallX, y: pos.y };
            if (loc.doorSide === "center") {
                return { x: pos.x, y: pos.y < mapHeight / 2 ? northHallY : southHallY };
            }
        }
        if (pos.y < mapHeight * 0.3) return { x: pos.x, y: northHallY };
        if (pos.y > mapHeight * 0.7) return { x: pos.x, y: southHallY };
        if (pos.x < mapWidth / 2) return { x: westHallX, y: pos.y };
        return { x: eastHallX, y: pos.y };
    }

    const startDoor = getAttachingCorridor(startPos, startLoc);
    const endDoor = getAttachingCorridor(endPos, endLoc);

    const points = [startPos, startDoor];

    const isStartNorth = Math.abs(startDoor.y - northHallY) < 10;
    const isStartSouth = Math.abs(startDoor.y - southHallY) < 10;
    const isStartWest = Math.abs(startDoor.x - westHallX) < 10;
    const isStartEast = Math.abs(startDoor.x - eastHallX) < 10;

    const isEndNorth = Math.abs(endDoor.y - northHallY) < 10;
    const isEndSouth = Math.abs(endDoor.y - southHallY) < 10;
    const isEndWest = Math.abs(endDoor.x - westHallX) < 10;
    const isEndEast = Math.abs(endDoor.x - eastHallX) < 10;

    if ((isStartNorth && isEndNorth) || (isStartSouth && isEndSouth)) {
        // Direct
    } else if ((isStartWest && isEndWest) || (isStartEast && isEndEast)) {
        // Direct
    } else if (isStartNorth && isEndWest) {
        points.push({ x: westHallX, y: northHallY });
    } else if (isStartNorth && isEndEast) {
        points.push({ x: eastHallX, y: northHallY });
    } else if (isStartSouth && isEndWest) {
        points.push({ x: westHallX, y: southHallY });
    } else if (isStartSouth && isEndEast) {
        points.push({ x: eastHallX, y: southHallY });
    } else if (isStartWest && isEndNorth) {
        points.push({ x: westHallX, y: northHallY });
    } else if (isStartWest && isEndSouth) {
        points.push({ x: westHallX, y: southHallY });
    } else if (isStartEast && isEndNorth) {
        points.push({ x: eastHallX, y: northHallY });
    } else if (isStartEast && isEndSouth) {
        points.push({ x: eastHallX, y: southHallY });
    } else if (isStartNorth && isEndSouth) {
        const viaWest = Math.abs(startDoor.x - westHallX) + Math.abs(endDoor.x - westHallX);
        const viaEast = Math.abs(startDoor.x - eastHallX) + Math.abs(endDoor.x - eastHallX);
        const chosenX = viaWest <= viaEast ? westHallX : eastHallX;
        points.push({ x: chosenX, y: northHallY });
        points.push({ x: chosenX, y: southHallY });
    } else if (isStartSouth && isEndNorth) {
        const viaWest = Math.abs(startDoor.x - westHallX) + Math.abs(endDoor.x - westHallX);
        const viaEast = Math.abs(startDoor.x - eastHallX) + Math.abs(endDoor.x - eastHallX);
        const chosenX = viaWest <= viaEast ? westHallX : eastHallX;
        points.push({ x: chosenX, y: southHallY });
        points.push({ x: chosenX, y: northHallY });
    } else if (isStartWest && isEndEast) {
        const viaNorth = Math.abs(startDoor.y - northHallY) + Math.abs(endDoor.y - northHallY);
        const viaSouth = Math.abs(startDoor.y - southHallY) + Math.abs(endDoor.y - southHallY);
        const chosenY = viaNorth <= viaSouth ? northHallY : southHallY;
        points.push({ x: westHallX, y: chosenY });
        points.push({ x: eastHallX, y: chosenY });
    } else if (isStartEast && isEndWest) {
        const viaNorth = Math.abs(startDoor.y - northHallY) + Math.abs(endDoor.y - northHallY);
        const viaSouth = Math.abs(startDoor.y - southHallY) + Math.abs(endDoor.y - southHallY);
        const chosenY = viaNorth <= viaSouth ? northHallY : southHallY;
        points.push({ x: eastHallX, y: chosenY });
        points.push({ x: westHallX, y: chosenY });
    }

    points.push(endDoor);
    points.push(endPos);

    return points;
}

function generateSvgPathData(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
    }
    return d;
}

/* ==========================================
   RENDER SVG ROUTE ON FLOOR
========================================== */
function drawSingleFloorRoute(startName, destName, floorName) {
    const floorContainer = document.getElementById(floorName === "ground" ? "groundInteractiveFloor" : "firstInteractiveFloor");
    const svg = document.getElementById(floorName === "ground" ? "svgGround" : "svgFirst");

    if (!floorContainer || !svg) return;
    svg.innerHTML = "";

    const startEl = floorContainer.querySelector(`.floor-location[data-location="${startName}"]`);
    const destEl = floorContainer.querySelector(`.floor-location[data-location="${destName}"]`);

    if (!startEl || !destEl) return;

    const startLoc = findLocation(startName);
    const endLoc = findLocation(destName);

    const startPos = getRoomCenter(startEl, floorContainer);
    const endPos = getRoomCenter(destEl, floorContainer);

    const points = calculateCorridorPoints(startPos, endPos, startLoc, endLoc, floorContainer);
    const pathD = generateSvgPathData(points);

    const bgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bgPath.setAttribute("d", pathD);
    bgPath.setAttribute("class", "route-path-background");
    svg.appendChild(bgPath);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("class", "route-path visible");
    svg.appendChild(path);

    points.slice(1, -1).forEach(pt => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", pt.x);
        circle.setAttribute("cy", pt.y);
        circle.setAttribute("r", "5");
        circle.setAttribute("class", "route-beacon");
        svg.appendChild(circle);
    });

    const walkingDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    walkingDot.setAttribute("r", "7");
    walkingDot.setAttribute("fill", "#2563eb");
    walkingDot.setAttribute("stroke", "#ffffff");
    walkingDot.setAttribute("stroke-width", "2");
    walkingDot.setAttribute("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.4))");

    const animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    animateMotion.setAttribute("path", pathD);
    animateMotion.setAttribute("dur", "4s");
    animateMotion.setAttribute("repeatCount", "indefinite");
    walkingDot.appendChild(animateMotion);
    svg.appendChild(walkingDot);
}

function clearSvgRoutes() {
    const svgG = document.getElementById("svgGround");
    const svgF = document.getElementById("svgFirst");
    if (svgG) svgG.innerHTML = "";
    if (svgF) svgF.innerHTML = "";
}

function clearLocationHighlights() {
    document.querySelectorAll(".floor-location").forEach(el => {
        el.classList.remove("active", "route-start", "route-destination", "route-active");
    });
}

function renderRouteForCurrentFloor() {
    if (!state.activeRoute) return;

    clearSvgRoutes();
    clearLocationHighlights();

    const { start, destination, isCrossFloor, transferStairs } = state.activeRoute;

    if (!isCrossFloor) {
        if (state.currentFloor === start.floor) {
            const startEl = document.querySelector(`.floor-location[data-location="${start.name}"]`);
            const destEl = document.querySelector(`.floor-location[data-location="${destination.name}"]`);
            if (startEl) startEl.classList.add("route-start");
            if (destEl) destEl.classList.add("route-destination");
            drawSingleFloorRoute(start.name, destination.name, start.floor);
        }
    } else {
        if (state.currentFloor === start.floor) {
            const startEl = document.querySelector(`.floor-location[data-location="${start.name}"]`);
            const stairsEl = document.querySelector(`.floor-location[data-location="${transferStairs.startFloorStairs}"]`);
            if (startEl) startEl.classList.add("route-start");
            if (stairsEl) stairsEl.classList.add("route-active");
            drawSingleFloorRoute(start.name, transferStairs.startFloorStairs, start.floor);
        } else if (state.currentFloor === destination.floor) {
            const stairsEl = document.querySelector(`.floor-location[data-location="${transferStairs.destFloorStairs}"]`);
            const destEl = document.querySelector(`.floor-location[data-location="${destination.name}"]`);
            if (stairsEl) stairsEl.classList.add("route-active");
            if (destEl) destEl.classList.add("route-destination");
            drawSingleFloorRoute(transferStairs.destFloorStairs, destination.name, destination.floor);
        }
    }
}

/* ==========================================
   MAIN ROUTE COMPUTATION
========================================== */
function calculateRoute() {
    if (!startSelect || !destinationSelect) return;

    const startName = startSelect.value;
    const destName = destinationSelect.value;

    if (!startName || !destName) {
        showRouteError("Please choose both a starting location and destination.");
        return;
    }

    if (startName === destName) {
        showRouteError("Start and destination cannot be the same location.");
        return;
    }

    const start = findLocation(startName);
    const destination = findLocation(destName);

    if (!start || !destination) {
        showRouteError("Could not resolve location coordinates.");
        return;
    }

    const isCrossFloor = start.floor !== destination.floor;
    const isAccessible = accessibleToggle ? accessibleToggle.checked : false;

    let transferStairs = null;

    if (isCrossFloor) {
        if (isAccessible) {
            transferStairs = {
                startFloorStairs: start.floor === "ground" ? "Ground Floor Stairs Left" : "Lift",
                destFloorStairs: destination.floor === "ground" ? "Ground Floor Stairs Left" : "Lift",
                label: "Elevator / Lift"
            };
        } else {
            const preferWest = start.wing.includes("West") || destination.wing.includes("West");
            if (preferWest) {
                transferStairs = {
                    startFloorStairs: start.floor === "ground" ? "Ground Floor Stairs Left" : "First Floor Stairs Top",
                    destFloorStairs: destination.floor === "ground" ? "Ground Floor Stairs Left" : "First Floor Stairs Top",
                    label: "West Staircase"
                };
            } else {
                transferStairs = {
                    startFloorStairs: start.floor === "ground" ? "Ground Floor Stairs Right" : "First Floor Stairs Right",
                    destFloorStairs: destination.floor === "ground" ? "Ground Floor Stairs Right" : "First Floor Stairs Right",
                    label: "East Staircase"
                };
            }
        }
    }

    state.activeRoute = {
        start,
        destination,
        isCrossFloor,
        transferStairs
    };

    if (crossFloorBanner) {
        if (isCrossFloor) {
            crossFloorBanner.style.display = "flex";
            if (crossFloorText) {
                crossFloorText.textContent = `Cross-Floor Navigation: ${start.floor === "ground" ? "Level 00 ➔ Level 01" : "Level 01 ➔ Level 00"} via ${transferStairs.label}`;
            }
        } else {
            crossFloorBanner.style.display = "none";
        }
    }

    switchFloor(start.floor, true);
    renderRouteCard(start, destination, isCrossFloor, transferStairs);

    const mapSec = document.getElementById("map");
    if (mapSec) mapSec.scrollIntoView({ behavior: "smooth", block: "start" });

    showToast(`Route calculated: ${start.name} ➔ ${destination.name}`);
}

function renderRouteCard(start, dest, isCrossFloor, transferStairs) {
    if (!routeResult) return;

    const startFloorName = start.floor === "ground" ? "Ground Floor (Level 00)" : "First Floor (Level 01)";
    const destFloorName = dest.floor === "ground" ? "Ground Floor (Level 00)" : "First Floor (Level 01)";

    const estDistance = isCrossFloor ? "75 meters" : "38 meters";
    const estTime = isCrossFloor ? "1 min 20 sec" : "40 sec";

    let stepsHtml = "";

    if (!isCrossFloor) {
        stepsHtml = `
            <div class="route-step-row">
                <div class="step-indicator step-start"><i class="fa-solid fa-person-walking"></i></div>
                <div class="step-content">
                    <strong>Start at ${start.name}</strong>
                    <small>${startFloorName} &bull; ${start.wing}</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-waypoint"><i class="fa-solid fa-diamond-turn-right"></i></div>
                <div class="step-content">
                    <strong>Follow the hallway corridor</strong>
                    <small>Walk along the marked pathway towards ${dest.wing}</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-destination"><i class="fa-solid fa-bullseye"></i></div>
                <div class="step-content">
                    <strong>Arrive at ${dest.name}</strong>
                    <small>Destination reached on ${destFloorName}</small>
                </div>
            </div>
        `;
    } else {
        stepsHtml = `
            <div class="route-step-row">
                <div class="step-indicator step-start"><i class="fa-solid fa-person-walking"></i></div>
                <div class="step-content">
                    <strong>Start at ${start.name}</strong>
                    <small>${startFloorName} &bull; ${start.wing}</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-waypoint"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="step-content">
                    <strong>Head towards ${transferStairs.startFloorStairs}</strong>
                    <small>Walk along the corridor on ${startFloorName}</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-stairs"><i class="fa-solid fa-stairs"></i></div>
                <div class="step-content">
                    <strong>Take ${transferStairs.label} to ${destFloorName}</strong>
                    <small>Change floor level via staircase or elevator</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-waypoint"><i class="fa-solid fa-diamond-turn-right"></i></div>
                <div class="step-content">
                    <strong>Exit at ${transferStairs.destFloorStairs} and follow gallery</strong>
                    <small>Walk down corridor towards ${dest.wing}</small>
                </div>
            </div>
            <div class="route-step-row">
                <div class="step-indicator step-destination"><i class="fa-solid fa-bullseye"></i></div>
                <div class="step-content">
                    <strong>Arrive at ${dest.name}</strong>
                    <small>Destination reached on ${destFloorName}</small>
                </div>
            </div>
        `;
    }

    routeResult.innerHTML = `
        <div class="route-card">
            <div class="route-header">
                <div class="route-header-main">
                    <div class="route-header-icon">
                        <i class="fa-solid fa-route"></i>
                    </div>
                    <div>
                        <h3>Directions: ${start.name} &rarr; ${dest.name}</h3>
                        <p>${isCrossFloor ? "Multi-floor trip via " + transferStairs.label : "Single floor walk on " + startFloorName}</p>
                    </div>
                </div>

                <div class="route-meta-badges">
                    <div class="meta-badge">
                        <i class="fa-solid fa-person-walking"></i>
                        <span>${estTime}</span>
                    </div>
                    <div class="meta-badge">
                        <i class="fa-solid fa-ruler-horizontal"></i>
                        <span>${estDistance}</span>
                    </div>
                    <button class="voice-btn" id="voiceBtn" title="Speak Directions Aloud">
                        <i class="fa-solid fa-volume-high"></i>
                        <span>Voice Guidance</span>
                    </button>
                    <button class="meta-badge" id="shareRouteBtn" title="Copy Route Link" style="cursor: pointer;">
                        <i class="fa-solid fa-share-nodes"></i>
                        <span>Share</span>
                    </button>
                </div>
            </div>

            <div class="route-steps-container">
                ${stepsHtml}
            </div>
        </div>
    `;

    const voiceBtn = document.getElementById("voiceBtn");
    if (voiceBtn) {
        voiceBtn.addEventListener("click", () => {
            speakDirections(start, dest, isCrossFloor, transferStairs);
        });
    }

    const shareBtn = document.getElementById("shareRouteBtn");
    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const url = `${window.location.origin}${window.location.pathname}?start=${encodeURIComponent(start.name)}&dest=${encodeURIComponent(dest.name)}`;
            navigator.clipboard.writeText(url).then(() => {
                showToast("Route link copied to clipboard!", "fa-link");
            }).catch(() => {
                showToast("URL: " + url, "fa-link");
            });
        });
    }
}

function showRouteError(message) {
    if (!routeResult) return;
    routeResult.innerHTML = `
        <div class="route-empty">
            <div class="route-empty-icon" style="background: var(--red-light); color: var(--red);">
                <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <h3>Unable to Create Route</h3>
            <p>${message}</p>
        </div>
    `;
}

function speakDirections(start, dest, isCrossFloor, transferStairs) {
    if (!('speechSynthesis' in window)) {
        showToast("Speech synthesis not supported in this browser.", "fa-volume-xmark");
        return;
    }

    const voiceBtn = document.getElementById("voiceBtn");

    if (state.isSpeaking) {
        window.speechSynthesis.cancel();
        state.isSpeaking = false;
        if (voiceBtn) {
            voiceBtn.classList.remove("speaking");
            voiceBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>Voice Guidance</span>';
        }
        return;
    }

    let speechText = "";
    if (!isCrossFloor) {
        speechText = `Starting from ${start.name} on the ${start.floor === "ground" ? "Ground Floor" : "First Floor"}. ` +
                     `Exit the room and follow the hallway corridor towards ${dest.wing}. ` +
                     `Proceed ahead and you will arrive at ${dest.name}.`;
    } else {
        speechText = `Starting from ${start.name} on the ${start.floor === "ground" ? "Ground Floor" : "First Floor"}. ` +
                     `Walk down the corridor to the ${transferStairs.label}. ` +
                     `Take the ${transferStairs.label} to the ${dest.floor === "ground" ? "Ground Floor" : "First Floor"}. ` +
                     `Once on the ${dest.floor === "ground" ? "Ground Floor" : "First Floor"}, follow the corridor towards ${dest.wing} until you reach ${dest.name}.`;
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
        state.isSpeaking = true;
        if (voiceBtn) {
            voiceBtn.classList.add("speaking");
            voiceBtn.innerHTML = '<i class="fa-solid fa-stop"></i> <span>Stop Voice</span>';
        }
    };

    utterance.onend = utterance.onerror = () => {
        state.isSpeaking = false;
        if (voiceBtn) {
            voiceBtn.classList.remove("speaking");
            voiceBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>Voice Guidance</span>';
        }
    };

    window.speechSynthesis.speak(utterance);
}

/* ==========================================
   ZOOM CONTROLS
========================================== */
function applyZoom() {
    const activeFloorEl = document.querySelector(".floor-map.active-floor .interactive-floor");
    if (activeFloorEl) {
        activeFloorEl.style.transform = `scale(${state.zoomLevel})`;
        activeFloorEl.style.transformOrigin = "center center";
    }
}

if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
        if (state.zoomLevel < 1.4) {
            state.zoomLevel += 0.1;
            applyZoom();
            showToast(`Zoom: ${Math.round(state.zoomLevel * 100)}%`, "fa-magnifying-glass-plus");
        }
    });
}

if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
        if (state.zoomLevel > 0.7) {
            state.zoomLevel -= 0.1;
            applyZoom();
            showToast(`Zoom: ${Math.round(state.zoomLevel * 100)}%`, "fa-magnifying-glass-minus");
        }
    });
}

if (zoomResetBtn) {
    zoomResetBtn.addEventListener("click", () => {
        state.zoomLevel = 1;
        applyZoom();
        showToast("Zoom reset", "fa-expand");
    });
}

/* ==========================================
   EVENT HANDLERS & RESET
========================================== */
if (routeBtn) {
    routeBtn.addEventListener("click", calculateRoute);
}

if (swapBtn) {
    swapBtn.addEventListener("click", () => {
        if (!startSelect || !destinationSelect) return;
        const temp = startSelect.value;
        startSelect.value = destinationSelect.value;
        destinationSelect.value = temp;

        if (startSelect.value && destinationSelect.value) {
            calculateRoute();
        }
    });
}

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        state.activeRoute = null;
        clearSvgRoutes();
        clearLocationHighlights();

        if (startSelect) startSelect.value = "";
        if (destinationSelect) destinationSelect.value = "";
        if (searchInput) searchInput.value = "";
        if (suggestions) suggestions.style.display = "none";
        if (crossFloorBanner) crossFloorBanner.style.display = "none";

        switchFloor("ground", true);

        if (routeResult) {
            routeResult.innerHTML = `
                <div class="route-empty">
                    <div class="route-empty-icon">
                        <i class="fa-solid fa-route"></i>
                    </div>
                    <h3>Ready to Navigate</h3>
                    <p>Select a starting location and destination above, or tap any room on the map to begin your route across the ARMIET campus.</p>
                </div>
            `;
        }

        showToast("Map reset to initial state", "fa-rotate-left");
    });
}

if (accessibleToggle) {
    accessibleToggle.addEventListener("change", () => {
        state.accessibleMode = accessibleToggle.checked;
        showToast(
            state.accessibleMode ? "Accessibility Mode: Elevator preferred" : "Standard Mode: Stairs enabled",
            "fa-wheelchair"
        );
        if (state.activeRoute) {
            calculateRoute();
        }
    });
}

/* ==========================================
   MOBILE MENU & CLICK-OUTSIDE
========================================== */
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}

document.addEventListener("click", (e) => {
    if (suggestions && searchInput && !searchInput.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = "none";
    }
});

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        renderRouteForCurrentFloor();
    }, 150);
});

window.quickNav = function (locationName) {
    const loc = findLocation(locationName);
    if (!loc) return;
    highlightRoom(locationName);
    openLocationModal(loc);
};

/* ==========================================
   ADMIN PORTAL INTEGRATION & CONTROLLERS
========================================== */

function updateAdminNavState() {
    if (adminNavBtn) {
        if (state.isAdminLoggedIn) {
            adminNavBtn.classList.add("logged-in");
            if (adminNavText) adminNavText.textContent = "Admin Active";
        } else {
            adminNavBtn.classList.remove("logged-in");
            if (adminNavText) adminNavText.textContent = "Admin Portal";
        }
    }
}
updateAdminNavState();

function openAdminLogin() {
    if (adminLoginModal) {
        adminLoginModal.style.display = "flex";
        if (adminUsername) adminUsername.focus();
    }
}

function closeAdminLogin() {
    if (adminLoginModal) adminLoginModal.style.display = "none";
}

if (closeLoginModalBtn) closeLoginModalBtn.addEventListener("click", closeAdminLogin);
if (adminLoginModal) {
    adminLoginModal.addEventListener("click", (e) => {
        if (e.target === adminLoginModal) closeAdminLogin();
    });
}

function openAdminPortal() {
    if (!state.isAdminLoggedIn) {
        openAdminLogin();
        return;
    }
    if (publicViewContainer && adminPortalWrapper) {
        publicViewContainer.style.display = "none";
        adminPortalWrapper.style.display = "flex";
        window.scrollTo(0, 0);
        switchAdminTab("overview");
        showToast("Welcome to ARMIET Admin Console", "fa-user-shield");
    }
}

function closeAdminPortal() {
    if (publicViewContainer && adminPortalWrapper) {
        adminPortalWrapper.style.display = "none";
        publicViewContainer.style.display = "block";
        window.scrollTo(0, 0);
        showToast("Exited Admin Portal", "fa-map");
    }
}

if (adminNavBtn) {
    adminNavBtn.addEventListener("click", () => {
        if (state.isAdminLoggedIn) {
            openAdminPortal();
        } else {
            openAdminLogin();
        }
    });
}

if (mobileAdminBtn) {
    mobileAdminBtn.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.classList.remove("active");
        if (state.isAdminLoggedIn) {
            openAdminPortal();
        } else {
            openAdminLogin();
        }
    });
}

if (footerAdminLink) {
    footerAdminLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (state.isAdminLoggedIn) {
            openAdminPortal();
        } else {
            openAdminLogin();
        }
    });
}

if (adminExitBtn) {
    adminExitBtn.addEventListener("click", closeAdminPortal);
}

if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
        state.isAdminLoggedIn = false;
        localStorage.removeItem("campusconnect_admin_session");
        updateAdminNavState();
        closeAdminPortal();
        showToast("Admin logged out successfully", "fa-right-from-bracket");
    });
}

// Admin Login Form
if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const u = adminUsername ? adminUsername.value.trim() : "";
        const p = adminPassword ? adminPassword.value.trim() : "";

        if (u === "admin" && (p === "armiet@2026" || p === "admin")) {
            state.isAdminLoggedIn = true;
            localStorage.setItem("campusconnect_admin_session", "true");
            updateAdminNavState();
            closeAdminLogin();
            openAdminPortal();
        } else {
            showToast("Invalid credentials. Try admin / armiet@2026", "fa-triangle-exclamation");
        }
    });
}

const btnLoginSubmit = document.getElementById("btnLoginSubmit");
if (btnLoginSubmit && adminLoginForm) {
    btnLoginSubmit.addEventListener("click", () => {
        adminLoginForm.dispatchEvent(new Event("submit", { cancelable: true }));
    });
}

if (btnQuickDemoLogin) {
    btnQuickDemoLogin.addEventListener("click", () => {
        state.isAdminLoggedIn = true;
        localStorage.setItem("campusconnect_admin_session", "true");
        updateAdminNavState();
        closeAdminLogin();
        openAdminPortal();
    });
}

/* ==========================================
   ADMIN TABS & SUB-VIEWS
========================================== */
function switchAdminTab(tabName) {
    state.adminActiveTab = tabName;

    adminNavItems.forEach(item => {
        item.classList.toggle("active", item.dataset.tab === tabName);
    });

    adminTabPanes.forEach(pane => {
        pane.classList.toggle("active", pane.id === `tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    });

    if (tabName === "overview") updateDashboardKpis();
    if (tabName === "locations") renderAdminLocationsTable();
    if (tabName === "sequence") renderAdminSequenceList();
    if (tabName === "notices") renderAdminNoticesList();
    if (tabName === "status") renderAdminStatusGrid();
}

adminNavItems.forEach(item => {
    item.addEventListener("click", () => {
        switchAdminTab(item.dataset.tab);
    });
});

/* ==========================================
   ADMIN TAB 1: OVERVIEW & KPIS
========================================== */
function updateDashboardKpis() {
    const total = locations.length;
    const available = locations.filter(l => !l.status || l.status === "available").length;
    const occupied = locations.filter(l => l.status === "occupied").length;
    const maintenance = locations.filter(l => l.status === "maintenance").length;

    const groundCount = locations.filter(l => l.floor === "ground").length;
    const firstCount = locations.filter(l => l.floor === "first").length;

    const kpiTotal = document.getElementById("kpiTotalRooms");
    const kpiAvail = document.getElementById("kpiAvailableRooms");
    const kpiOcc = document.getElementById("kpiOccupiedRooms");
    const kpiMaint = document.getElementById("kpiMaintenanceRooms");
    const kpiGround = document.getElementById("kpiGroundCount");
    const kpiFirst = document.getElementById("kpiFirstCount");
    const barGround = document.getElementById("barGroundFill");
    const barFirst = document.getElementById("barFirstFill");

    if (kpiTotal) kpiTotal.textContent = total;
    if (kpiAvail) kpiAvail.textContent = available;
    if (kpiOcc) kpiOcc.textContent = occupied;
    if (kpiMaint) kpiMaint.textContent = maintenance;

    if (kpiGround) kpiGround.textContent = `${groundCount} Rooms`;
    if (kpiFirst) kpiFirst.textContent = `${firstCount} Rooms`;

    if (barGround && total > 0) barGround.style.width = `${Math.round((groundCount / total) * 100)}%`;
    if (barFirst && total > 0) barFirst.style.width = `${Math.round((firstCount / total) * 100)}%`;
}

if (btnQuickAddRoom) {
    btnQuickAddRoom.addEventListener("click", () => {
        openLocationEditModal();
    });
}

/* ==========================================
   ADMIN TAB 2: LOCATIONS CRUD TABLE
========================================== */
function renderAdminLocationsTable() {
    if (!adminTableBody) return;
    adminTableBody.innerHTML = "";

    const searchVal = adminRoomSearch ? adminRoomSearch.value.toLowerCase().trim() : "";
    const floorVal = adminFloorFilter ? adminFloorFilter.value : "all";
    const catVal = adminCategoryFilter ? adminCategoryFilter.value : "all";

    const filtered = locations.filter(loc => {
        const matchesSearch = !searchVal || 
            loc.name.toLowerCase().includes(searchVal) || 
            (loc.desc && loc.desc.toLowerCase().includes(searchVal)) ||
            (loc.wing && loc.wing.toLowerCase().includes(searchVal));
        const matchesFloor = floorVal === "all" || loc.floor === floorVal;
        const matchesCat = catVal === "all" || loc.category === catVal || (catVal === "stairs" && (loc.category === "stairs" || loc.name.includes("Stairs") || loc.name.includes("Lift")));
        return matchesSearch && matchesFloor && matchesCat;
    });

    if (filtered.length === 0) {
        adminTableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 36px 20px; color: var(--muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 24px; margin-bottom: 8px; opacity: 0.6; display: block;"></i>
                    No campus rooms found matching the current search filters.
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(loc => {
        const tr = document.createElement("tr");

        const floorBadge = loc.floor === "ground"
            ? '<span class="card-tag tag-ground">Level 00</span>'
            : '<span class="card-tag tag-first">Level 01</span>';

        const statusClass = loc.status === "occupied" ? "occupied" : (loc.status === "maintenance" ? "maintenance" : "");
        const statusLabel = loc.status === "occupied" ? "In Class" : (loc.status === "maintenance" ? "Maintenance" : "Available");

        const globalIndex = locations.findIndex(l => l.name === loc.name);

        tr.innerHTML = `
            <td>
                <span class="seq-badge">#${globalIndex + 1}</span>
            </td>
            <td>
                <div class="table-room-cell">
                    <div class="table-room-icon">
                        <i class="fa-solid ${loc.icon || 'fa-chalkboard'}"></i>
                    </div>
                    <div>
                        <strong>${loc.name}</strong>
                        <small>${(loc.desc || '').substring(0, 48)}...</small>
                    </div>
                </div>
            </td>
            <td>${floorBadge}</td>
            <td><span class="card-tag" style="background: var(--background); color: var(--text);">${(loc.category || 'classroom').toUpperCase()}</span></td>
            <td>
                <small style="font-weight: 700;">${loc.wing || 'Wing'}</small>
                <div style="font-size: 11px; color: var(--muted);">${(loc.doorSide || 'north').toUpperCase()} Corridor</div>
            </td>
            <td>
                <span class="status-badge-inline ${statusClass}">${statusLabel}</span>
            </td>
            <td>
                <div class="table-actions">
                    <button class="btn-table-action btn-table-up" title="Move Up in Sequence" ${globalIndex === 0 ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <button class="btn-table-action btn-table-down" title="Move Down in Sequence" ${globalIndex === locations.length - 1 ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <button class="btn-table-action btn-table-edit" title="Edit Room Details">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn-table-action btn-table-delete" title="Delete Room">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        // Direct element listeners - completely safe from room name string bugs!
        const editBtn = tr.querySelector(".btn-table-edit");
        if (editBtn) {
            editBtn.addEventListener("click", () => openLocationEditModal(loc));
        }

        const delBtn = tr.querySelector(".btn-table-delete");
        if (delBtn) {
            delBtn.addEventListener("click", () => {
                if (confirm(`Are you sure you want to remove "${loc.name}" from the campus map?`)) {
                    locations = locations.filter(l => l.name !== loc.name);
                    persistLocationsDatabase();
                    renderAdminLocationsTable();
                    renderAdminSequenceList();
                    showToast(`Removed "${loc.name}"`, "fa-trash");
                }
            });
        }

        const upBtn = tr.querySelector(".btn-table-up");
        if (upBtn) {
            upBtn.addEventListener("click", () => moveLocationInSequence(loc.name, -1));
        }

        const downBtn = tr.querySelector(".btn-table-down");
        if (downBtn) {
            downBtn.addEventListener("click", () => moveLocationInSequence(loc.name, 1));
        }

        adminTableBody.appendChild(tr);
    });
}

if (adminRoomSearch) adminRoomSearch.addEventListener("input", renderAdminLocationsTable);
if (adminFloorFilter) adminFloorFilter.addEventListener("change", renderAdminLocationsTable);
if (adminCategoryFilter) adminCategoryFilter.addEventListener("change", renderAdminLocationsTable);

if (btnAddNewLocation) {
    btnAddNewLocation.addEventListener("click", () => {
        openLocationEditModal();
    });
}

if (btnGoToSequence) {
    btnGoToSequence.addEventListener("click", () => {
        switchAdminTab("sequence");
    });
}

/* ==========================================
   ADD / EDIT LOCATION MODAL
========================================== */
function openLocationEditModal(existingLocation = null, defaultCategory = null) {
    if (!locationEditModalBackdrop) return;

    // Helper to ensure an option exists in a select element
    function ensureOption(selectEl, value, label) {
        if (!selectEl || !value) return;
        const exists = Array.from(selectEl.options).some(opt => opt.value === value);
        if (!exists) {
            const opt = document.createElement("option");
            opt.value = value;
            opt.textContent = label || value;
            selectEl.appendChild(opt);
        }
    }

    if (existingLocation) {
        editOriginalName.value = existingLocation.name;
        editModalHeading.textContent = `Edit: ${existingLocation.name}`;
        editModalActionTitle.textContent = existingLocation.category === "classroom" ? "Edit Classroom / Lecture Hall" : "Edit Room Details";
        editLocationName.value = existingLocation.name;
        editLocationFloor.value = existingLocation.floor;
        
        ensureOption(editLocationCategory, existingLocation.category, (existingLocation.category || '').toUpperCase());
        editLocationCategory.value = existingLocation.category;

        editLocationWing.value = existingLocation.wing || "North Wing";
        editLocationDoorSide.value = existingLocation.doorSide || "north";

        ensureOption(editLocationIcon, existingLocation.icon, existingLocation.icon);
        editLocationIcon.value = existingLocation.icon || "fa-chalkboard";
        
        if (editModalIconPreview) {
            editModalIconPreview.innerHTML = `<i class="fa-solid ${existingLocation.icon || 'fa-chalkboard'}"></i>`;
        }

        editLocationDesc.value = existingLocation.desc || "";
        editLocationStatus.value = existingLocation.status || "available";
    } else {
        const cat = defaultCategory || "classroom";
        editOriginalName.value = "";
        editModalHeading.textContent = cat === "classroom" ? "Add New Classroom / Lecture Hall" : "Add New Campus Location";
        editModalActionTitle.textContent = cat === "classroom" ? "New Classroom" : "New Room";
        editLocationName.value = "";
        editLocationFloor.value = "ground";
        editLocationCategory.value = cat;
        editLocationWing.value = "North Wing";
        editLocationDoorSide.value = "north";
        editLocationIcon.value = cat === "classroom" ? "fa-chalkboard" : "fa-flask";
        
        if (editModalIconPreview) {
            editModalIconPreview.innerHTML = `<i class="fa-solid ${cat === 'classroom' ? 'fa-chalkboard' : 'fa-flask'}"></i>`;
        }

        editLocationDesc.value = "";
        editLocationStatus.value = "available";
    }

    locationEditModalBackdrop.classList.add("show");
    locationEditModalBackdrop.style.display = "flex";
    if (editLocationName) {
        setTimeout(() => editLocationName.focus(), 60);
    }
}

function closeLocationEditModal() {
    if (locationEditModalBackdrop) {
        locationEditModalBackdrop.classList.remove("show");
        locationEditModalBackdrop.style.display = "none";
    }
}

if (closeLocationEditBtn) closeLocationEditBtn.addEventListener("click", closeLocationEditModal);
if (btnCancelEditLocation) btnCancelEditLocation.addEventListener("click", closeLocationEditModal);
if (locationEditModalBackdrop) {
    locationEditModalBackdrop.addEventListener("click", (e) => {
        if (e.target === locationEditModalBackdrop) closeLocationEditModal();
    });
}

// Live Icon Preview
if (editLocationIcon && editModalIconPreview) {
    editLocationIcon.addEventListener("change", () => {
        editModalIconPreview.innerHTML = `<i class="fa-solid ${editLocationIcon.value}"></i>`;
    });
}

function handleSaveLocation(e) {
    if (e && e.preventDefault) e.preventDefault();

    const name = editLocationName ? editLocationName.value.trim() : "";
    if (!name) {
        showToast("Please enter a valid room or class name", "fa-circle-exclamation");
        if (editLocationName) editLocationName.focus();
        return;
    }

    const isEditing = !!editOriginalName.value;
    const origName = editOriginalName.value.trim();

    // Check duplicate name
    const isDuplicate = locations.some(l => 
        l.name.toLowerCase() === name.toLowerCase() && 
        (!isEditing || l.name.toLowerCase() !== origName.toLowerCase())
    );

    if (isDuplicate) {
        showToast(`A room named "${name}" already exists!`, "fa-triangle-exclamation");
        return;
    }

    const newLoc = {
        name: name,
        floor: editLocationFloor ? editLocationFloor.value : "ground",
        category: editLocationCategory ? editLocationCategory.value : "classroom",
        className: name.toLowerCase().replace(/[^a-z0-9]/g, ""),
        icon: editLocationIcon ? editLocationIcon.value : "fa-chalkboard",
        desc: editLocationDesc && editLocationDesc.value.trim() 
            ? editLocationDesc.value.trim() 
            : `${name} ${editLocationCategory && editLocationCategory.value === 'classroom' ? 'Classroom' : 'Facility'} on ${editLocationFloor && editLocationFloor.value === "ground" ? "Ground Floor" : "First Floor"}.`,
        wing: editLocationWing ? editLocationWing.value : "North Wing",
        nearestStairs: (editLocationWing && editLocationWing.value.includes("West")) ? "West Stairs" : "East Stairs",
        doorSide: editLocationDoorSide ? editLocationDoorSide.value : "north",
        status: editLocationStatus ? editLocationStatus.value : "available"
    };

    if (isEditing) {
        const idx = locations.findIndex(l => l.name === origName);
        if (idx !== -1) {
            locations[idx] = { ...locations[idx], ...newLoc };
            
            // If name changed, update any floor map elements
            if (origName !== name) {
                const oldBtn = findFloorLocationBtn(origName);
                if (oldBtn) {
                    oldBtn.dataset.location = name;
                    const span = oldBtn.querySelector("span:not(.status-dot)");
                    if (span) span.textContent = name;
                }
            }

            showToast(`Updated "${name}" successfully`, "fa-pen");
        } else {
            locations.push(newLoc);
            showToast(`Saved "${name}"`, "fa-check");
        }
    } else {
        locations.push(newLoc);
        showToast(`Added new room "${name}" successfully`, "fa-circle-plus");
    }

    persistLocationsDatabase();
    closeLocationEditModal();
    renderAdminLocationsTable();
    renderAdminSequenceList();
}

if (locationEditForm) {
    locationEditForm.addEventListener("submit", handleSaveLocation);
}
if (btnSaveLocation) {
    btnSaveLocation.addEventListener("click", handleSaveLocation);
}

/* ==========================================
   ADMIN TAB 2.5: CLASS SEQUENCE & REORDERING
========================================== */
function getScopedSequenceList() {
    const scope = adminSequenceScope ? adminSequenceScope.value : "classrooms";
    const searchVal = adminSequenceSearch ? adminSequenceSearch.value.toLowerCase().trim() : "";

    return locations.filter(loc => {
        let matchesScope = true;
        if (scope === "classrooms") {
            matchesScope = loc.category === "classroom";
        } else if (scope === "ground") {
            matchesScope = loc.category === "classroom" && loc.floor === "ground";
        } else if (scope === "first") {
            matchesScope = loc.category === "classroom" && loc.floor === "first";
        }

        const matchesSearch = !searchVal || 
            loc.name.toLowerCase().includes(searchVal) || 
            (loc.desc && loc.desc.toLowerCase().includes(searchVal)) || 
            (loc.wing && loc.wing.toLowerCase().includes(searchVal));

        return matchesScope && matchesSearch;
    });
}

function renderAdminSequenceList() {
    if (!adminSequenceList) return;
    adminSequenceList.innerHTML = "";

    const scopedList = getScopedSequenceList();

    if (scopedList.length === 0) {
        adminSequenceList.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; background: var(--card-bg); border-radius: 14px; border: 1px dashed var(--border); color: var(--muted);">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 24px; margin-bottom: 8px; opacity: 0.6; display: block;"></i>
                <p>No classrooms or locations match the selected sequence filter.</p>
            </div>
        `;
        return;
    }

    scopedList.forEach((loc, index) => {
        const card = document.createElement("div");
        card.className = "sequence-item-card";
        card.draggable = true;
        card.dataset.locationName = loc.name;

        const floorBadge = loc.floor === "ground"
            ? '<span class="card-tag tag-ground">Level 00</span>'
            : '<span class="card-tag tag-first">Level 01</span>';

        const statusClass = loc.status === "occupied" ? "occupied" : (loc.status === "maintenance" ? "maintenance" : "");
        const statusLabel = loc.status === "occupied" ? "In Class" : (loc.status === "maintenance" ? "Maintenance" : "Available");

        card.innerHTML = `
            <div class="seq-left">
                <div class="seq-drag-handle" title="Drag to reorder position">
                    <i class="fa-solid fa-grip-vertical"></i>
                </div>
                <div class="seq-badge-wrap" title="Order sequence position">
                    <span>#</span>
                    <input type="number" min="1" max="${scopedList.length}" class="seq-input" value="${index + 1}" title="Change position number and press Enter">
                </div>
                <div class="seq-icon">
                    <i class="fa-solid ${loc.icon || 'fa-chalkboard'}"></i>
                </div>
                <div class="seq-info">
                    <strong>${loc.name}</strong>
                    <div class="seq-meta">
                        ${floorBadge}
                        <span>${loc.wing || 'Campus Wing'}</span>
                        <span class="status-badge-inline ${statusClass}">${statusLabel}</span>
                    </div>
                </div>
            </div>
            <div class="seq-actions">
                <button class="seq-btn btn-seq-up" title="Move up in sequence" ${index === 0 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
                <button class="seq-btn btn-seq-down" title="Move down in sequence" ${index === scopedList.length - 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <button class="seq-btn seq-btn-edit btn-seq-edit" title="Edit Classroom Details">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
        `;

        // Up button
        const upBtn = card.querySelector(".btn-seq-up");
        if (upBtn) {
            upBtn.addEventListener("click", () => moveScopedSequenceItem(loc.name, -1));
        }

        // Down button
        const downBtn = card.querySelector(".btn-seq-down");
        if (downBtn) {
            downBtn.addEventListener("click", () => moveScopedSequenceItem(loc.name, 1));
        }

        // Edit button
        const editBtn = card.querySelector(".btn-seq-edit");
        if (editBtn) {
            editBtn.addEventListener("click", () => openLocationEditModal(loc, "classroom"));
        }

        // Direct Sequence Number Input
        const inputNum = card.querySelector(".seq-input");
        if (inputNum) {
            inputNum.addEventListener("change", () => {
                const targetPos = parseInt(inputNum.value, 10);
                if (!isNaN(targetPos) && targetPos >= 1 && targetPos <= scopedList.length) {
                    jumpScopedSequenceItem(loc.name, targetPos - 1);
                } else {
                    inputNum.value = index + 1;
                }
            });
            inputNum.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    inputNum.blur();
                }
            });
        }

        // HTML5 Drag and Drop
        card.addEventListener("dragstart", (e) => {
            card.classList.add("dragging");
            if (e.dataTransfer) e.dataTransfer.setData("text/plain", loc.name);
        });

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
        });

        card.addEventListener("dragover", (e) => {
            e.preventDefault();
            const draggingCard = document.querySelector(".sequence-item-card.dragging");
            if (draggingCard && draggingCard !== card) {
                const rect = card.getBoundingClientRect();
                const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
                adminSequenceList.insertBefore(draggingCard, next && card.nextSibling || card);
            }
        });

        card.addEventListener("drop", (e) => {
            e.preventDefault();
            const draggedName = e.dataTransfer ? e.dataTransfer.getData("text/plain") : null;
            if (!draggedName) return;

            // Compute new order from DOM elements
            const cardElements = Array.from(adminSequenceList.querySelectorAll(".sequence-item-card"));
            const newNamesOrder = cardElements.map(c => c.dataset.locationName);
            applyNewScopedOrder(newNamesOrder);
        });

        adminSequenceList.appendChild(card);
    });
}

function moveLocationInSequence(locName, direction) {
    const idx = locations.findIndex(l => l.name === locName);
    if (idx === -1) return;
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= locations.length) return;

    // Swap in locations array
    const temp = locations[idx];
    locations[idx] = locations[targetIdx];
    locations[targetIdx] = temp;

    persistLocationsDatabase();
    renderAdminLocationsTable();
    renderAdminSequenceList();
    showToast(`Reordered "${locName}"`, "fa-arrow-down-1-9");
}

function moveScopedSequenceItem(locName, direction) {
    const scopedList = getScopedSequenceList();
    const currScopedIdx = scopedList.findIndex(l => l.name === locName);
    if (currScopedIdx === -1) return;
    const targetScopedIdx = currScopedIdx + direction;
    if (targetScopedIdx < 0 || targetScopedIdx >= scopedList.length) return;

    const targetLocName = scopedList[targetScopedIdx].name;

    const idx1 = locations.findIndex(l => l.name === locName);
    const idx2 = locations.findIndex(l => l.name === targetLocName);
    if (idx1 === -1 || idx2 === -1) return;

    const temp = locations[idx1];
    locations[idx1] = locations[idx2];
    locations[idx2] = temp;

    persistLocationsDatabase();
    renderAdminSequenceList();
    renderAdminLocationsTable();
    showToast(`Moved "${locName}" ${direction < 0 ? 'up' : 'down'} in sequence`, "fa-arrow-down-1-9");
}

function jumpScopedSequenceItem(locName, targetIndex) {
    const scopedList = getScopedSequenceList();
    const currScopedIdx = scopedList.findIndex(l => l.name === locName);
    if (currScopedIdx === -1 || currScopedIdx === targetIndex) return;

    const item = scopedList.splice(currScopedIdx, 1)[0];
    scopedList.splice(targetIndex, 0, item);

    applyNewScopedOrder(scopedList.map(l => l.name));
}

function applyNewScopedOrder(newNamesOrder) {
    const orderIndices = [];
    locations.forEach((loc, i) => {
        if (newNamesOrder.includes(loc.name)) {
            orderIndices.push(i);
        }
    });

    const orderedItems = newNamesOrder.map(name => locations.find(l => l.name === name)).filter(Boolean);

    orderIndices.forEach((pos, i) => {
        if (orderedItems[i]) {
            locations[pos] = orderedItems[i];
        }
    });

    persistLocationsDatabase();
    renderAdminSequenceList();
    renderAdminLocationsTable();
    showToast("Class sequence updated successfully", "fa-circle-check");
}

function resetClassSequenceToDefaults() {
    if (confirm("Reset class sequence order back to standard default order?")) {
        const defaultNames = defaultLocations.map(d => d.name);
        locations.sort((a, b) => {
            const idxA = defaultNames.indexOf(a.name);
            const idxB = defaultNames.indexOf(b.name);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            if (idxA !== -1) return -1;
            if (idxB !== -1) return 1;
            return 0;
        });

        persistLocationsDatabase();
        renderAdminSequenceList();
        renderAdminLocationsTable();
        showToast("Restored default class sequence", "fa-rotate-left");
    }
}

if (adminSequenceSearch) adminSequenceSearch.addEventListener("input", renderAdminSequenceList);
if (adminSequenceScope) adminSequenceScope.addEventListener("change", renderAdminSequenceList);
if (btnResetClassSequence) btnResetClassSequence.addEventListener("click", resetClassSequenceToDefaults);
if (btnSaveClassSequence) {
    btnSaveClassSequence.addEventListener("click", () => {
        persistLocationsDatabase();
        showToast("Class sequence saved and active across campus!", "fa-floppy-disk");
    });
}
if (btnSequenceAddClass) {
    btnSequenceAddClass.addEventListener("click", () => {
        openLocationEditModal(null, "classroom");
    });
}

/* ==========================================
   ADMIN TAB 3: NOTICES & BROADCASTS
========================================== */
function renderAdminNoticesList() {
    if (!adminNoticesList) return;
    adminNoticesList.innerHTML = "";

    if (campusNotices.length === 0) {
        adminNoticesList.innerHTML = '<p style="color: var(--muted); font-size: 13px;">No notices published yet.</p>';
        return;
    }

    campusNotices.forEach(n => {
        const div = document.createElement("div");
        div.className = "notice-item-card";
        div.innerHTML = `
            <div class="notice-item-main">
                <strong>${n.text}</strong>
                <small>${n.createdAt} &bull; ${n.isActive ? '<span style="color: var(--green); font-weight: 800;">ACTIVE BANNER</span>' : 'ARCHIVED'}</small>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn-table-action btn-table-delete" title="Delete notice" data-del-notice="${n.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        div.querySelector(`[data-del-notice="${n.id}"]`).addEventListener("click", () => {
            campusNotices = campusNotices.filter(item => item.id !== n.id);
            persistCampusNotices();
            showToast("Notice removed", "fa-trash");
        });

        adminNoticesList.appendChild(div);
    });
}

if (btnPublishNotice) {
    btnPublishNotice.addEventListener("click", () => {
        const text = noticeTextInput ? noticeTextInput.value.trim() : "";
        if (!text) {
            showToast("Please enter notice content", "fa-circle-exclamation");
            return;
        }

        const isActive = noticeActiveCheck ? noticeActiveCheck.checked : true;

        if (isActive) {
            // Unset previous active notices
            campusNotices.forEach(n => n.isActive = false);
        }

        const newNotice = {
            id: "notice-" + Date.now(),
            text: text,
            isActive: isActive,
            createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        campusNotices.unshift(newNotice);
        persistCampusNotices();

        if (noticeTextInput) noticeTextInput.value = "";
        showToast("Campus notice published successfully", "fa-bullhorn");
    });
}

/* ==========================================
   ADMIN TAB 4: ROOM OCCUPANCY QUICK TOGGLES
========================================== */
function renderAdminStatusGrid() {
    if (!adminStatusGrid) return;
    adminStatusGrid.innerHTML = "";

    locations.forEach(loc => {
        const card = document.createElement("div");
        card.className = "status-toggle-card";

        const floorText = loc.floor === "ground" ? "Ground (L00)" : "1st Floor (L01)";

        card.innerHTML = `
            <div class="status-card-info">
                <strong>${loc.name}</strong>
                <small>${floorText} &bull; ${loc.wing}</small>
            </div>
            <select class="status-select-btn" data-status-loc="${loc.name}">
                <option value="available" ${(!loc.status || loc.status === 'available') ? 'selected' : ''}>Available</option>
                <option value="occupied" ${loc.status === 'occupied' ? 'selected' : ''}>In Class</option>
                <option value="maintenance" ${loc.status === 'maintenance' ? 'selected' : ''}>Maintenance</option>
            </select>
        `;

        const select = card.querySelector(`[data-status-loc="${loc.name}"]`);
        select.addEventListener("change", (e) => {
            loc.status = e.target.value;
            persistLocationsDatabase();
            showToast(`${loc.name} set to ${e.target.value.toUpperCase()}`);
        });

        adminStatusGrid.appendChild(card);
    });
}

/* ==========================================
   ADMIN TAB 5: BACKUP & DATA RESET
========================================== */
if (btnExportJson) {
    btnExportJson.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(locations, null, 2));
        const dlAnchor = document.createElement("a");
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `armiet_campus_locations_${Date.now()}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
        showToast("Exported campus data JSON", "fa-download");
    });
}

if (btnImportJson && importJsonFileInput) {
    btnImportJson.addEventListener("click", () => {
        importJsonFileInput.click();
    });

    importJsonFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    locations = parsed;
                    persistLocationsDatabase();
                    renderAdminLocationsTable();
                    updateDashboardKpis();
                    showToast(`Successfully imported ${locations.length} campus locations!`, "fa-file-import");
                } else {
                    showToast("Invalid JSON schema for campus locations", "fa-triangle-exclamation");
                }
            } catch (err) {
                showToast("Error parsing JSON file", "fa-triangle-exclamation");
            }
        };
        reader.readAsText(file);
    });
}

if (btnResetDefaults) {
    btnResetDefaults.addEventListener("click", () => {
        if (confirm("Reset all custom locations, room edits, and status overrides back to the official ARMIET 44 factory default locations?")) {
            localStorage.removeItem("campusconnect_custom_locations");
            locations = [...defaultLocations];
            persistLocationsDatabase();
            renderAdminLocationsTable();
            updateDashboardKpis();
            showToast("Restored all 44 ARMIET defaults", "fa-rotate-left");
        }
    });
}

/* ==========================================
   URL QUERY PARAMETERS DEEP-LINKING
========================================== */
function checkUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const startParam = params.get("start");
    const destParam = params.get("dest");

    if (startParam && startSelect) {
        startSelect.value = startParam;
    }
    if (destParam && destinationSelect) {
        destinationSelect.value = destParam;
    }
    if (startParam && destParam) {
        calculateRoute();
    }
}

// Initial Run
switchFloor("ground", true);
checkUrlParameters();
console.log("CampusConnect ARMIET Smart Navigation & Admin Portal Initialized Successfully");
