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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14,17.7V21H10V20.3L14,17.7M17,3H7V6H17V3M15,7L14,7.7V7H10V10.3L9,11V12L15,8.1V7M15,11L14,11.7V9.7L10,12.4V14.4L9,15V16L15,12.1V11M15,15L14,15.7V13.7L10,16.4V18.4L9,19V20L15,16.1V15Z" fill="{color}"/></svg>