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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.71,1.22L12.88,4.05C12.1,4.83 12.1,6.09 12.88,6.87L14.3,8.29L10.06,12.53L7.58,10.06L1.22,16.42L7.58,22.78L13.94,16.42L11.47,13.94L15.71,9.7L17.13,11.12C17.91,11.9 19.17,11.9 19.95,11.12L22.78,8.29L15.71,1.22M15.71,4.05L19.95,8.29L18.54,9.7L14.3,5.46L15.71,4.05Z" fill="{color}"/></svg>