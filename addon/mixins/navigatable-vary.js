import Ember from 'ember';

/**
  Push / pop navigatable to / from navigation
**/
export default Ember.Mixin.create({
  // navigation $view
  element: null,

  // move speed (ms)
  wait: 400,

  // navgatable is moving.
  isMove: false,

  // navigatable count.
  navCount: 1,

  push: function (nav) {
    if (this.get("isMove")) {
      return;
    }
    this.set("isMove", true);

    if (!(nav instanceof Ember.Object)) {
      nav = this.createNavigatable(nav);
    }
    this.get('navs').pushObject(nav);

    var wait = this.get('wait'),
      $elem = this.get('element'),
      $well = $elem.find('.navigation-well'),
      $channel = $well.find('.navigatable-channel'),
      navCount = this.get('navCount'),
      width = $well.width();

    navCount = navCount + 1;
    $channel.css({'width': (navCount * width) + 'px'});

    $channel.animate(
      {marginLeft: (-width * (navCount - 1)) + 'px'},
      {speed: wait}
    );

    var runLater = Ember.run.later(this, function () {
      this.set('isMove', false);
      this.set('navCount', navCount);
      Ember.run.cancel(runLater);
      // $elem.css({'height': $well.height() + 'px'});
    }, wait);
  },

  pop: function () {
    if (this.get("isMove")) {
      return;
    }
    this.set("isMove", true);

    var wait = this.get('wait'),
      $elem = this.get('element'),
      $well = $elem.find('.navigation-well'),
      $channel = $well.find('.navigatable-channel'),
      navCount = this.get("navCount"),
      width = $well.width();

    $channel.animate(
      {marginLeft: (-width * (navCount - 2)) + 'px'},
      {speed: wait}
    );

    var runLater = Ember.run.later(this, function(){
      this.set('navs', this.get('navs').slice(0, this.get('navs.length') - 1));
      this.set('isMove', false);
      this.set('navCount', navCount - 1);
      Ember.run.cancel(runLater);
      // $elem.css({'height': $well.height() + 'px'});
    }, wait);
  }
});
