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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,4V9L18.5,7.5L5.5,20.5L3.5,18.5L16.5,5.5L15,4H20M17,20A3,3 0 0,1 14,17V15A3,3 0 0,1 17,12A3,3 0 0,1 20,15V17A3,3 0 0,1 17,20M17,14A1,1 0 0,0 16,15V17A1,1 0 0,0 17,18A1,1 0 0,0 18,17V15A1,1 0 0,0 17,14M7,12A3,3 0 0,1 4,9V7A3,3 0 0,1 7,4A3,3 0 0,1 10,7V9A3,3 0 0,1 7,12M7,6A1,1 0 0,0 6,7V9A1,1 0 0,0 7,10A1,1 0 0,0 8,9V7A1,1 0 0,0 7,6Z" fill="{color}"/></svg>