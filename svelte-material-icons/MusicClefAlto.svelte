<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 4H7V20H5M15.46 13H14.83L13.83 12L14.83 11H15.46A3.5 3.5 0 1 0 11.96 7.5H13.96A1.5 1.5 0 1 1 15.46 9H14L12 11H11V4H9V20H11V13H12L14 15H15.46A1.5 1.5 0 1 1 13.96 16.5H11.96A3.5 3.5 0 1 0 15.46 13Z" fill="{color}"/></svg>