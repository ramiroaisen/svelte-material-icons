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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.84 22.73L15.11 17H9L9 14C6.5 12.57 4 11 4 6V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M22 4V2H5.2L7.2 4H22M20 6H9.2L16.37 13.17C18.33 11.87 20 10.07 20 6M13 22H15V19H13V22M9 22H11V19H9L9 22Z" fill="{color}"/></svg>