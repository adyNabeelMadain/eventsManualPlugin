describe('Unit : event Manual Plugin widget.manual.controller.js', function () {
  var WidgetEvent, scope, $rootScope, $controller, Buildfire, ActionItems, TAG_NAMES, STATUS_CODE, LAYOUTS, STATUS_MESSAGES, CONTENT_TYPE, q;
  beforeEach(module('eventsManualPluginWidget'));
  var editor;
  beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _TAG_NAMES_, _STATUS_CODE_, _LAYOUTS_, _STATUS_MESSAGES_) {
    $rootScope = _$rootScope_;
    q = _$q_;
    scope = $rootScope.$new();
    $controller = _$controller_;
    TAG_NAMES = _TAG_NAMES_;
    STATUS_CODE = _STATUS_CODE_;
    STATUS_MESSAGES = _STATUS_MESSAGES_;
    LAYOUTS = _LAYOUTS_;
    Buildfire = {
      components: {
        carousel: {
          editor: function (name) {
            return {}
          },
          viewer: function (name) {
            return {}
          }
        }
      }
    };
    ActionItems = jasmine.createSpyObj('ActionItems', ['showDialog']);
    Buildfire.components.carousel = jasmine.createSpyObj('Buildfire.components.carousel', ['editor', 'onAddItems']);

  }));

  beforeEach(function () {
    WidgetEvent = $controller('WidgetEventCtrl', {
      $scope: scope,
      $q: q,
      Buildfire: Buildfire,
      TAG_NAMES: TAG_NAMES,
      ActionItems: ActionItems,
      STATUS_CODE: STATUS_CODE,
      CONTENT_TYPE: CONTENT_TYPE,
      LAYOUTS: LAYOUTS
    });
  });

  describe('Units: units should be Defined', function () {
  });

  describe('$destroy', function () {
    it('should invoke when get $destroy', function () {
      $rootScope.$broadcast('$destroy');
    });
  });

  describe('Carousel:LOADED', function () {
    it('should invoke when get Carousel:LOADED', function () {
        WidgetEvent.view = {
        loadItems: function() {}
      };
      $rootScope.$broadcast(' ');
    });
  });

  describe('WidgetEvent.getUTCZone', function () {
    it('should invoke when WidgetEvent.getUTCZone is called', function () {
      WidgetEvent.getUTCZone();
    });
  });
  describe('WidgetEvent.partOfTime', function () {
    it('should invoke when WidgetEvent.partOfTime is called', function () {
      var format='HH', paramTime = '2015-10-23T03:24:07.391Z0.9960675491020083'
      WidgetEvent.partOfTime(format,paramTime);
    });
  });

  describe('WidgetEvent.convertToZone', function () {
    it('should invoke when WidgetEvent.convertToZone is called', function () {
      var result={data: {
        "title": "",
        "listImage": "",
        "deepLinkUrl": "",
        "carouselImages": [],
        "startDate": "",
        "endDate": "",
        "isAllDay": "",
        "timezone": "",
        "timeDisplay": "",
        "repeat": {},
        "addressTitle": "",
        "address": {},
        "description": "",
        "links": []

      }  };
      WidgetEvent.convertToZone(result);
    });
  });
});