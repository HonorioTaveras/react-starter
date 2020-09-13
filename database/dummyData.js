module.exports = {
  routeList: (page, count) => {
    return [
      {
        "route_id": 1,
        "route_name": "Calypso",
        "route_type": "Trad",
        "grade": "5.6",
        "rating": 3.75,
        "pitches": 3,
      },
      {
        "route_id": 2,
        "route_name": "Free Willie",
        "route_type": "Sport",
        "grade": "5.11a",
        "rating": 4,
        "pitches": 1,
      },
      {
        "route_id": 3,
        "route_name": "North Face",
        "route_type": "Trad",
        "grade": "5.6 R",
        "rating": 4.5,
        "pitches": 5,
      },
      {
        "route_id": 4,
        "route_name": "The Yellow Spur",
        "route_type": "Trad",
        "grade": "5.9+",
        "rating": 4.75,
        "pitches": 6,
      },
      {
        "route_id": 5,
        "route_name": "Rewritten",
        "route_type": "Trad",
        "grade": "5.7",
        "rating": 4.75,
        "pitches": 6,
      },
    ]
  },
  route: (route_id) => {
    return {
      "route_id": 1,
      "route_name": "Calypso",
      "route_type": "Trad",
      "grade": "5.6",
      "rating": 3.75,
      "pitches": 3,
      "location": "Eldorado Canyon in Boulder, Colorado",
      "Description": "Classic route. Start just left of the huge boulder. Move up and right, then cruise up the obvious crack until you get to the roof. Move right around the roof and carefully protect this for you and your second, or up and left (Calypso Direct - 5.8). Belay from two bolts at the nice ledge.\n\nYou can rappel down 100' or continue up the crack just left of the belay station to another ledge. There used to be 3 old pins above the P1 anchor. These have apparently fallen out over the years. Exit from the top carefully via the sloping ledge running up and left.",
      "Photos": [
        {
          "url": "https://cdn2.apstatic.com/photos/climb/105935643_medium_1557951647.jpg"
        },
        {
          "url": "https://cdn2.apstatic.com/photos/climb/106287952_large_1494094655.jpg"
        },
        {
          "url": "https://cdn2.apstatic.com/photos/climb/116805804_large_1556568644.jpg"
        },
      ]
    }
  },
};