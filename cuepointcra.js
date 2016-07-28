videojs.plugin('cuePointCTA', function () {
  var myPlayer = this,
      cuePointAra = [],
      timeoutID,
      allCuePointData;

  function checkTime() {
    window.clearTimeout(timeoutID);
    myPlayer.addClass('hide-overlay');
  }

  function displayCTA(cpData) {
    var dataAra = cpData.metadata.split(';'),
        durationCTA = dataAra.length ? dataAra[0].trim() : null,
        textCTA = dataAra.length >= 2 ? dataAra[1].trim() : null,
        urlCTA = dataAra.length === 3 ? dataAra[2].trim() : null,
        element,
        timeoutValue;

    if (urlCTA) {
      element = '<a href="' + urlCTA + '">' + textCTA + '</a>';

    } else {
      element = '<span>' + textCTA + '</span>';
    }

    timeoutValue = Number(durationCTA) * 1000;
    timeoutID = window.setTimeout(checkTime, timeoutValue);

    document.getElementsByClassName('vjs-overlay')[0].innerHTML = element;
    myPlayer.removeClass('hide-overlay');
  }

  function getSubArray(targetArray, objProperty, value) {
    var idxArr = [],
        i;

    for (i = 0; i < targetArray.length; i++) {
      if (targetArray[i][objProperty] === value) {
        idxArr.push(targetArray[i]);
      }
    }

    return idxArr;
  }

  myPlayer.overlay({
    overlays: [{
      start: 'play',
      content: ''
    }]
  });

  myPlayer.addClass('hide-overlay');

  myPlayer.on('loadstart', function () {
    var tt = myPlayer.textTracks()[0];

    cuePointAra = myPlayer.mediainfo.cue_points;

    tt.oncuechange = function () {
      if (tt.activeCues[0] !== undefined) {
        allCuePointData = getSubArray(cuePointAra, 'time', tt.activeCues[0].startTime);

        displayCTA(allCuePointData[0]);
      }
    };
  });
});
