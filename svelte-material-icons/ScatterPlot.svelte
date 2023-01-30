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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,11A3,3 0 0,1 10,14A3,3 0 0,1 7,17A3,3 0 0,1 4,14A3,3 0 0,1 7,11M11,3A3,3 0 0,1 14,6A3,3 0 0,1 11,9A3,3 0 0,1 8,6A3,3 0 0,1 11,3M16.6,14.6C18.25,14.6 19.6,15.94 19.6,17.6A3,3 0 0,1 16.6,20.6C14.94,20.6 13.6,19.25 13.6,17.6A3,3 0 0,1 16.6,14.6Z" fill="{color}"/></svg>