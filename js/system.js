        $(document).ready(function () {
            $('.sidenav').sidenav();
            $('input#input_text, textarea#textarea2').characterCounter();
            $('.scrollspy').scrollSpy();
            $('.carousel').carousel();
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true
              });
        });

        $.fakeLoader({
            timeToHide: 1000,
            bgColor: "#FFB72F",
            spinner: "spinner7"
        });
