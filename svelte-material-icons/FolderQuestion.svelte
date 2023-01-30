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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M16.8 18H15.3V16.5H16.8V18M16.8 15.8H15.3C15.3 13.4 17.5 13.5 17.5 12C17.5 11.2 16.8 10.5 16 10.5S14.5 11.2 14.5 12H13C13 10.3 14.3 9 16 9S19 10.3 19 12C19 13.9 16.8 14.1 16.8 15.8Z" fill="{color}"/></svg>