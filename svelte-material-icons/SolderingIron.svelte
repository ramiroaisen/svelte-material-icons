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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4.86 4.03L2.03 6.86L5.21 10.04V12.87L6.63 14.28L12.28 8.63L10.87 7.21H8.04L4.86 4.03M17 6V7.5C18 7.5 18.85 8.33 18.85 9.35C18.85 10.37 18 11.2 17 11.2V12.7C19.24 12.7 21 14.53 21 16.77V21H22.5V16.76C22.5 14.54 21.22 12.62 19.35 11.73C19.97 11.12 20.35 10.28 20.35 9.35C20.35 7.5 18.85 6 17 6M11.93 11.1L9.1 13.93L14.05 18.88L14.76 18.17L16.88 20.29L19 21L18.29 18.88L16.17 16.76L16.88 16.05L11.93 11.1Z" fill="{color}"/></svg>