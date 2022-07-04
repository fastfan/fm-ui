<script>
    import Tabs from 'element-ui/packages/tabs/index.js'
export default {
    name: "FTabs",
    mixins: [Tabs],
    methods: {
        calcPaneInstances(isForceUpdate = false) {
        if (this.$slots.default) {
          const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
            vnode.componentOptions && (vnode.componentOptions.Ctor.options.name === 'FTabPane' || vnode.componentOptions.Ctor.options.name === 'ElTabPane'));
          // update indeed
          const panes = paneSlots.map(({ componentInstance }) => componentInstance);
          const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]));
          if (isForceUpdate || panesChanged) {
            this.panes = panes;
          }
        } else if (this.panes.length !== 0) {
          this.panes = [];
        }
      },
    }
}
</script>
