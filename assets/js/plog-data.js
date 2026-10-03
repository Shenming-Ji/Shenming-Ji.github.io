window.PlogData = (function() {
  const photos = [
    { caption: "Road back home", img: "images/Road_back_home.JPG", tags: "night" },
    { caption: "IFS", img: "images/IFS.JPG", tags: "night" },
    { caption: "Library", img: "images/Lib.JPG", tags: "night" },
    { caption: "A&M Bell Tower", img: "images/Bell_tower.JPG", tags: "night" },
    { caption: "Station", img: "images/Station.JPG", tags: "night" },
    { caption: "Crowd", img: "images/Crowd.JPG", tags: "night" },
    { caption: "Legacy & Vision", img: "images/DSC_2009.jpg", tags: "night" },
    { caption: "Lotus", img: "images/DSC_2428.jpg", tags: "day" },
    { caption: "Ancient Lighthouse", img: "images/DSC_2403.jpg", tags: "day" },
    { caption: "Lake View", img: "images/Lakeview.JPG", tags: "day" },
    { caption: "Silence", img: "images/f469249cd7dc29f9e1082b942ed40206.JPG", tags: "day" },
    { caption: "Main Library", img: "images/MainLibrary.JPG", tags: "day" },
    { caption: "Tech", img: "images/Tech.JPG", tags: "day" },
    { caption: "Meditation", img: "images/Zone.JPG", tags: "day" },
    { caption: "Skyscraper", img: "images/Skyscraper.JPG", tags: "night" },
    { caption: "Aurora", img: "images/Aurora.JPG", tags: "night" },
    { caption: "Snow Fog", img: "images/Snow fog.jpg", tags: "day" },
    { caption: "CHRISTKINDL MARKET", img: "images/CHRISTKINDL MARKET.JPG", tags: "night" },
    { caption: "Christmas tree", img: "images/Christmas tree.JPG", tags: "day" },
    { caption: "Ferry", img: "images/Ferry.JPG", tags: "day" },
    { caption: "Lady Liberty", img: "images/Lady Liberty.JPG", tags: "day" },
    { caption: "Night NYC", img: "images/Night NYC.jpg", tags: "night" },
    { caption: "Ice Skating", img: "images/Ice Skating.JPG", tags: "night" },
    { caption: "Sunrise", img: "images/sunrise.jpg", tags: "day" },
    { caption: "UoL Tower", img: "images/uol_tower.JPG", tags: "day" },
    { caption: "Pomp House", img: "images/POMPHOUSE.JPG", tags: "day" },
    { caption: "UoL Building", img: "images/liverpool_building.JPG", tags: "day" },
    { caption: "Civic Center", img: "images/liverpool_central.JPG", tags: "day" },
    { caption: "Match Night: Chicago vs. Miami", img: "images/match_night.jpg", tags: "night" },
    { caption: "GOAT", img: "images/messi.jpg", tags: "night" }
  ];

  const filterLabels = {
    all: "All Frames",
    day: "Natural Light",
    night: "After Dark",
    gear: "Gear Notes"
  };

  return { photos, filterLabels };
})();
