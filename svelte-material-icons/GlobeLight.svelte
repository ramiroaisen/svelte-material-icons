<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.1 10C8.1 9 9.5 8.3 11 8.1V2H13V8.1C14.5 8.3 15.9 9 16.9 10H7.1M5.3 13C5.1 13.6 5 14.3 5 15C5 18.9 8.1 22 12 22S19 18.9 19 15C19 14.3 18.9 13.6 18.7 13H5.3Z" fill="{color}"/></svg>