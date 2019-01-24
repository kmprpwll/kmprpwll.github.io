<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","314894195686584");fbq("set","agent","tmgoogletagmanager","314894195686584");fbq("track","PageView");</script>
<script src="/media/HomeAndGarden/Shared/whereToBuySettings.js"></script>
    <script src="/media/HomeAndGarden/HotShot/web-min.js"></script>


<script>
    (function ($) {
        $('#thumbcarousel').carousel(0);
        var $thumbItems = $('#thumbcarousel .item');
        $('#carousel').on('slide.bs.carousel', function (event) {
            var $slide = $(event.relatedTarget);
            var thumbIndex = $slide.data('thumb');
            var curThumbIndex = $thumbItems.index($('#thumbcarousel .item.active').get(0));
            if (curThumbIndex > thumbIndex) {
                $('#thumbcarousel').one('slid.bs.carousel', function (event) {
                    $('#thumbcarousel').carousel(thumbIndex);
                });
                if (curThumbIndex === ($thumbItems.length - 1)) {
                    $('#thumbcarousel').carousel('next');
                } else {
                    $('#thumbcarousel').carousel(numThumbItems - 1);
                }
            } else {
                $('#thumbcarousel').carousel(thumbIndex);
            }
        });
    })(jQuery);
</script>
