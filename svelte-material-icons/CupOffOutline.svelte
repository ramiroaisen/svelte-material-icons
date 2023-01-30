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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3.83 2L5.83 4H18.78L17.5 15.66L19.3 17.5L21 2M2.27 3L1 4.27L3.53 6.8L5 20.23C5.13 21.23 5.97 22 7 22H17C17.47 22 17.91 21.82 18.26 21.54L19.73 23L21 21.73M5.78 9.06L16.73 20H7Z" fill="{color}"/></svg>