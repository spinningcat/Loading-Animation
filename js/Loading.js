/* sayfa gelirken böyle bir animasyon kullanılması iyi olur diye düşünmüş. O yüzden böyle bir çalışma yaptım. */


var $animated = $('.animated');
$animated.data('max-width', $animated.width()).data('step', 3);

var interval = setInterval(function () {
    var maxWidth = $animated.data('max-width');
    var step = $animated.data('step');
    
    if (step === 3) {
        $animated.width(maxWidth * 1/3);
    } else if (step === 2) {
        $animated.width(maxWidth);
    } else {
        $animated.width(maxWidth * 2/3);
    }
    
    $animated.data('step', step % 3 + 1);
}, 800);

//cancel me later
//clearInterval(interval);
