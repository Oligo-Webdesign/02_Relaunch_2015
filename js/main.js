// jQBrowser v0.2: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))

/* ----------------------------------------------------------------- */

var aol       = $.browser.aol();       // AOL Explorer
var camino    = $.browser.camino();    // Camino
var firefox   = $.browser.firefox();   // Firefox
var flock     = $.browser.flock();     // Flock
var icab      = $.browser.icab();      // iCab
var konqueror = $.browser.konqueror(); // Konqueror
var mozilla   = $.browser.mozilla();   // Mozilla
var msie      = $.browser.msie();      // Internet Explorer Win / Mac
var netscape  = $.browser.netscape();  // Netscape
var opera     = $.browser.opera();     // Opera
var safari    = $.browser.safari();    // Safari
      
var userbrowser     = $.browser.browser(); //detected user browser

//operating systems

var linux = $.browser.linux(); // Linux
var mac   = $.browser.mac();   // Mac OS
var win   = $.browser.win();   // Microsoft Windows

//version

var userversion    = $.browser.version.number();

/* ----------------------------------------------------------------- */
      
if (mac == true) { 
  
  $("html").addClass("mac"); 
      
  
} else if (linux == true) {
  
  $("html").addClass("linux"); 
  
} else if (win == true) {
  
  $("html").addClass("windows");
  
}

/* ----------------------------------------------------------------- */     

if (userbrowser == "Safari") {
  
  $("html").addClass("safari"); 
  
} else if (userbrowser == "Firefox") {

  $("html").addClass("firefox"); 

} else if (userbrowser == "Camino") {

  $("html").addClass("camino"); 

} else if (userbrowser == "AOL Explorer") {

  $("html").addClass("aol"); 

} else if (userbrowser == "Flock") {

  $("html").addClass("flock"); 

} else if (userbrowser == "iCab") {

  $("html").addClass("icab"); 

} else if (userbrowser == "Konqueror") {

  $("html").addClass("konqueror"); 

} else if (userbrowser == "Mozilla") {

  $("html").addClass("mozilla"); 

} else if (userbrowser == "Netscape") {

  $("html").addClass("netscape"); 

} else if (userbrowser == "Opera") {

  $("html").addClass("opera"); 

} else if (userbrowser == "Internet Explorer") {
  
  $("html").addClass("ie");
  
} else {}

$("html").addClass("" + userversion + "");

// #######################  NiceScroll  #######################
$(document).ready(
  function() {
    $("html").niceScroll({
      scrollspeed:200,
      mousescrollstep: 200,
      cursorborder: "none",
      cursorcolor: "none",
      touchbehavior: false,
      bouncescroll: true
    });
  }
);

$("body").addClass("load");

// #######################  TOOLTIP  #######################
$('[data-toggle="tooltip"]').tooltip({
  cssClass : 'tooltip'
});

// #######################  NOTEPAD COMPARE  #######################
$('.notepad-item-container').hide(); 

$('.notepad-item-trigger').click(function(){
    var $this = $(this),
        thisActive = $this.hasClass('active'),
        active;
    if (thisActive) {
        $this.removeClass('active').next().slideUp(300);
    }
    else {
        active = $('.notepad-item-trigger.active');
        if (active.length === 1) {
            active.removeClass('active').next().slideUp(300);
        }
        $this.addClass('active').next().slideDown(2000);
    }
});

    $('.notepad-item-el-expand-all').click(function(){
        var all = $('.notepad-item-el-trigger'),
            active = all.filter('.active');
        
        if (all.length && all.length === active.length) {
            all.removeClass('active').next().slideUp(300);
        }
          else {
            all.not('.active').addClass('active').next().slideDown(2000);
        }
        return false;
    });
    $('.notepad-item-sl-expand-all').click(function(){
        var all = $('.notepad-item-sl-trigger'),
            active = all.filter('.active');
        
        if (all.length && all.length === active.length) {
            all.removeClass('active').next().slideUp(300);
        }
          else {
            all.not('.active').addClass('active').next().slideDown(2000);
        }
        return false;
    });
    $('.notepad-item-oplus-expand-all').click(function(){
        var all = $('.notepad-item-oplus-trigger'),
            active = all.filter('.active');
        
        if (all.length && all.length === active.length) {
            all.removeClass('active').next().slideUp(300);
        }
          else {
            all.not('.active').addClass('active').next().slideDown(2000);
        }
        return false;
    });

// #######################  Deatil Controls  #######################
    $(".btn-remember").click(function(){
        $(".btn-remember").toggleClass("btn-active");
    });
    $(".btn-cart").click(function(){
        $(".btn-cart").toggleClass("btn-active");
    });

// #######################  Hiding Navigation  #######################
    $("div.navbar-fixed-top").autoHidingNavbar();


// #######################  Scroll to top  #######################
    $('.scrolltop').click(function(e)
    {
      $('html, body').animate({'scrollTop': 0}, 1500);
      e.preventDefault();
    });

// #######################  Arrow Collapse  #######################
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

// #######################  Background-Slider  #######################
$('#carousel-hero').carousel({ interval: 5000 });

$('#carousel-impression').carousel({
  interval: 4000,
  keyboard: true
});

$('#carousel-static').carousel({ interval: 6000 });

// #######################  Nav-Search  #######################
new UISearch( document.getElementById( 'sb-search' ) );

// ####################### AUDIO PLAYER  ############################
var getaudio = $('#player')[0];
var mouseovertimer;
var audiostatus = 'off';
    
$(document).on('mouseenter', '.speaker', function() {
  if (!mouseovertimer) {
        mouseovertimer = window.setTimeout(function() {
              mouseovertimer = null;
              if (!$('.speaker').hasClass("speakerplay")){            
                    getaudio.load();
                    getaudio.play();
                    $('.speaker').addClass('speakerplay');    
                    return false;
              }       
        }, 1000);
   }
});

$(document).on('mouseleave', '.speaker', function() {
    if (mouseovertimer) {
          window.clearTimeout(mouseovertimer);
          mouseovertimer = null;
    }
});

$(document).on('click touchend', '.speaker', function() {
      if (!$('.speaker').hasClass("speakerplay")){
                if (audiostatus == 'off') {
                         $('.speaker').addClass('speakerplay');
                      getaudio.load();
                      getaudio.play();
                      window.clearTimeout(mouseovertimer);
                      audiostatus = 'on';
                      return false;       
              }
              else if (audiostatus == 'on'){
                      $('.speaker').addClass('speakerplay');
                      getaudio.play()       
              }
      }
      else if ($('.speaker').hasClass("speakerplay")){
                getaudio.pause();
              $('.speaker').removeClass('speakerplay');
              window.clearTimeout(mouseovertimer);
              audiostatus = 'on';           
      }
});

$('#player').on('ended', function() {    
      $('.speaker').removeClass('speakerplay');  
      audiostatus = 'off';
});


// ####################### GRID-FILTER  ############################

  $(document).ready(function($){
      //open/close lateral filter
      $('.cd-filter-trigger').on('click', function(){
        triggerFilter(true);
      });
      $('.cd-filter .cd-close').on('click', function(){
        triggerFilter(false);
      });

      function triggerFilter($bool) {
        var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
        elementsToTrigger.each(function(){
          $(this).toggleClass('filter-is-visible', $bool);
        });
      }

      //mobile version - detect click event on filters tab
      var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
        filter_tab_placeholder_default_value = 'SCHLIESSEN',
        filter_tab_placeholder_text = filter_tab_placeholder.text();
      
      $('.cd-tab-filter li').on('click', function(event){
        //detect which tab filter item was selected
        var selected_filter = $(event.target).data('type');
          
        //check if user has clicked the placeholder item
        if( $(event.target).is(filter_tab_placeholder) ) {
          (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
          $('.cd-tab-filter').toggleClass('is-open');

        //check if user has clicked a filter already selected 
        } else if( filter_tab_placeholder.data('type') == selected_filter ) {
          filter_tab_placeholder.text($(event.target).text());
          $('.cd-tab-filter').removeClass('is-open'); 

        } else {
          //close the dropdown and change placeholder text/data-type value
          $('.cd-tab-filter').removeClass('is-open');
          filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
          filter_tab_placeholder_text = $(event.target).text();
          
          //add class selected to the selected filter item
          $('.cd-tab-filter .selected').removeClass('selected');
          $(event.target).addClass('selected');
        }
      });

      //close filter dropdown inside lateral .cd-filter 
      $('.cd-filter-block h4').on('click', function(){
        $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
      })

      buttonFilter.init();
      $('.cd-gallery ul').mixItUp({
          controls: {
            enable: false
          },
          animation: {
            duration: 400,
            effects: 'fade stagger(200ms)'
          },
          callbacks: {
            onMixStart: function(){
              $('.cd-fail-message').fadeOut(200);
            },
              onMixFail: function(){
                $('.cd-fail-message').fadeIn(200);
            }
          }
      });

      //search filtering
      var inputText;
      var $matching = $();

      var delay = (function(){
        var timer = 0;
        return function(callback, ms){
          clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
      })();

      $(".cd-filter-content input[type='search']").keyup(function(){
          // Delay function invoked to make sure user stopped typing
          delay(function(){
            inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
            // Check to see if input field is empty
            if ((inputText.length) > 0) {            
                $('.mix').each(function() {
                  var $this = $(this);
                
                  // add item to be filtered out if input text matches items inside the title   
                  if($this.attr('class').toLowerCase().match(inputText)) {
                      $matching = $matching.add(this);
                  } else {
                      // removes any previously matched item
                      $matching = $matching.not(this);
                  }
                });
                $('.cd-gallery ul').mixItUp('filter', $matching);
            } else {
                // resets the filter to show all item if input is empty
                $('.cd-gallery ul').mixItUp('filter', 'all');
            }
          }, 200 );
      });
    });

    var buttonFilter = {
        // Declare any variables we will need as properties of the object
        $filters: null,
        groups: [],
        outputArray: [],
        outputString: '',
      
        // The "init" method will run on document ready and cache any jQuery objects we will need.
        init: function(){
          var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
        
          self.$filters = $('.cd-main-content');
          self.$container = $('.cd-gallery ul');
        
          self.$filters.find('.cd-filters').each(function(){
              var $this = $(this);
            
            self.groups.push({
                $inputs: $this.find('.filter'),
                active: '',
                tracker: false
            });
          });
          
          self.bindHandlers();
        },
      
        // The "bindHandlers" method will listen for whenever a button is clicked. 
        bindHandlers: function(){
          var self = this;

          self.$filters.on('click', 'a', function(e){
              self.parseFilters();
          });
          self.$filters.on('change', function(){
            self.parseFilters();           
          });
        },
      
        parseFilters: function(){
          var self = this;
       
          // loop through each filter group and grap the active filter from each one.
          for(var i = 0, group; group = self.groups[i]; i++){
            group.active = [];
            group.$inputs.each(function(){
              var $this = $(this);
              if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
                if($this.is(':checked') ) {
                  group.active.push($this.attr('data-filter'));
                }
              } else if($this.is('select')){
                group.active.push($this.val());
              } else if( $this.find('.selected').length > 0 ) {
                group.active.push($this.attr('data-filter'));
              }
            });
          }
          self.concatenate();
        },
      
        concatenate: function(){
          var self = this;
        
          self.outputString = ''; // Reset output string
        
          for(var i = 0, group; group = self.groups[i]; i++){
              self.outputString += group.active;
          }
        
          // If the output string is empty, show all rather than none:    
          !self.outputString.length && (self.outputString = 'all'); 
      
          // Send the output string to MixItUp via the 'filter' method:    
        if(self.$container.mixItUp('isLoaded')){
            self.$container.mixItUp('filter', self.outputString);
        }
        }
    };

// ####################### CONTACT FORM  ############################
     $(document).ready(function() {
  $("#feedbackSubmit").click(function() {

    contactForm.clearErrors();
 
    var hasErrors = false;
    $('#feedbackForm input,textarea').each(function() {
      if (!$(this).val()) {
        hasErrors = true;
        contactForm.addError($(this));
      }
    });
    var $email = $('#email');
    if (!contactForm.isValidEmail($email.val())) {
      hasErrors = true;
      contactForm.addError($email);
    }
    if (hasErrors) {
      return false;
    }

    $.ajax({
      type: "POST",
      url: "#",
      data: $("#feedbackForm").serialize(),
      success: function(data)
      {
        contactForm.addAjaxMessage(data.message, false);
        $('#captcha').attr('src', 'securimage/securimage_show.php?' + Math.random());
      },
      error: function(response)
      {
        contactForm.addAjaxMessage(response.responseJSON.message, true);
      }
   });
    return false;
  }); 
});
var contactForm = {
  isValidEmail: function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  },
  clearErrors: function () {
    $('#emailAlert').remove();
    $('#feedbackForm .help-block').hide();
    $('#feedbackForm .form-group').removeClass('has-error');
  },
  addError: function ($input) {
    $input.siblings('.help-block').show();
    $input.parent('.form-group').addClass('has-error');
  },
  addAjaxMessage: function(msg, isError) {
    $("#feedbackSubmit").after('<div id="emailAlert" class="alert alert-' + (isError ? 'danger' : 'success') + '" style="margin-top: 5px;">' + $('<div/>').text(msg).html() + '</div>');
  }
};