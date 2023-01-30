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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z" fill="{color}"/></svg>