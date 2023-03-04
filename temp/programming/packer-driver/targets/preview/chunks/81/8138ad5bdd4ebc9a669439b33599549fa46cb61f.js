System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, ScrollView, instantiate, ItemOption, EventType, EventData, EventManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ViewType, OptionScrollview;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemOption(extras) {
    _reporterNs.report("ItemOption", "./ItemOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventData(extras) {
    _reporterNs.report("EventData", "../Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ItemOption = _unresolved_2.ItemOption;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
      EventData = _unresolved_3.EventData;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4793bJ9a+lDepO/Pw2B7BAX", "OptionScrollview", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'ScrollView', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator); //界面类型

      (function (ViewType) {
        ViewType[ViewType["none"] = 0] = "none";
        ViewType[ViewType["Spine_view"] = 1] = "Spine_view";
        ViewType[ViewType["Animation_view"] = 2] = "Animation_view";
        ViewType[ViewType["Skin_viwe"] = 3] = "Skin_viwe";
        ViewType[ViewType["Event_view"] = 4] = "Event_view";
        ViewType[ViewType["MAX"] = 255] = "MAX";
      })(ViewType || (ViewType = {}));

      _export("OptionScrollview", OptionScrollview = (_dec = ccclass('OptionScrollview'), _dec2 = property(Prefab), _dec3 = property(Number), _dec(_class = (_class2 = class OptionScrollview extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemOption", _descriptor, this);

          _initializerDefineProperty(this, "viewType", _descriptor2, this);

          this._data = null;
          this._curChooseName = '';
        }

        start() {// this.loadLisit([]);
          // this.skeletons([]);
        }

        skeletons(data) {
          this._data = data;

          if (data && data instanceof Array) {
            this.loadLisit(data);
          }
        }

        setData(viewtype, data) {
          this.viewType = viewtype;
          this._data = data;

          if (data && data instanceof Array) {
            this.loadLisit(data);
          }
        }

        loadLisit(array) {
          var content = this.getComponent(ScrollView).content;
          content.removeAllChildren();

          for (var i = 0; i < array.length; i++) {
            var item = instantiate(this.itemOption);
            content.addChild(item);
            var option = item.getComponent(_crd && ItemOption === void 0 ? (_reportPossibleCrUseOfItemOption({
              error: Error()
            }), ItemOption) : ItemOption);
            option.itemName = array[i];

            option.clickFunc = function (ani) {
              if (this._eventType != ViewType.Event_view) {
                this.choose(ani);
              }
            }.bind(this);
          }
        }

        choose(animation) {
          console.log('choose:', animation, this._curChooseName);

          if (this._curChooseName != animation) {
            this._curChooseName = animation; // console.log('选择item选项_name = ',animation);

            this.notify();
          }
        }

        notify() {
          var eventType = 0;

          if (this.viewType == ViewType.Spine_view) {
            eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).CHANGE_SPINE;
          } else if (this.viewType == ViewType.Animation_view) {
            eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).CHANGE_SPINE_ANIMATION;
          } else if (this.viewType == ViewType.Skin_viwe) {
            eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_SPINE_SKIN;
          }

          var param = new (_crd && EventData === void 0 ? (_reportPossibleCrUseOfEventData({
            error: Error()
          }), EventData) : EventData)();
          param.eventType = eventType;
          param.param = this._curChooseName;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().emit('machine', param);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemOption", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "viewType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8138ad5bdd4ebc9a669439b33599549fa46cb61f.js.map