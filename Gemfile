source "https://rubygems.org"

# Use the github-pages gem so your local build matches
# exactly what GitHub's servers will render — avoids
# "works locally, breaks on Pages" surprises.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility (harmless to leave in on Linux)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw]
