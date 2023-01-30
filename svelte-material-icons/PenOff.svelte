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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2.3,5L1,6.3L7.5,12.8L3,17.2V21H6.8L11.3,16.5L17.8,23L19.1,21.7L2.3,5M16.9,10.9L13.1,7.1L17,3.3C17.4,2.9 18,2.9 18.4,3.3L20.7,5.6C21.1,6 21.1,6.6 20.7,7C20.4,7.4 20,7.7 20,8C20,8.3 20.3,8.7 20.6,9C21.1,9.5 21.6,10 21.5,10.4C21.5,10.9 21,11.4 20.5,11.9L16.4,16L15,14.7L19.2,10.5L18.2,9.5L16.9,10.9M10,10.2L12.5,7.7L16.3,11.5L13.8,14L10,10.2Z" fill="{color}"/></svg>