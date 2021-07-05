# Update RSS feed
import json

projects = json.load(open("data/projects.json"))

feed = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n<rss version=\"2.0\">\r\n\r\n<channel>\n<title>WebCoder49\'s Projects</title>\r\n  <link>https://www.webcoder49.gtihub.io</link>\r\n  <description>Websites, Videogames, Tutorials and more!</description><image>\r\n    <url>https://webcoder49.wordpress.com/favicon.ico</url>\r\n    <title>WebCoder49</title>\r\n    <link>https://webcoder49.github.io/</link>\r\n  </image>\n"
for projectID in projects:
    p = projects[projectID]
    feed += "<item>\r\n    <title>" + p["title"] + "</title>\r\n    <link>https://webcoder49.github.io/#" + projectID + "</link>\r\n    <description>" + p["description"] + "</description>\r\n<pubDate>" + p["date"] + "</pubDate>\r\n</item>\n"
feed += "</channel>\r\n\r\n</rss>"

with open('feed.xml', 'w') as file:
    file.write(feed)
    print("Feed Written")