import { Component } from "@angular/core";
import { AboutMeExperienceCardComponent } from "./aboutmeExperienceCard.component";
import { TitleComponent } from "./title.component";

@Component({
  selector: 'app-aboutme',
  imports: [AboutMeExperienceCardComponent, TitleComponent],
  template: `
    <div id="aboutme-section" class="aboutme_container">
      <!-- Section Titre et Description -->
      <div>
        <app-title [title]="'About Me'"></app-title>
        <p style="color: #9290C3">
          Hello! I'm Sani Adamou, a passionate Full Stack Developer with a strong focus on creating efficient, scalable, and user-friendly solutions. With extensive experience in both back-end and front-end development, I specialize in building web, desktop, and mobile applications. I also have a deep interest in cybersecurity, AI, and cloud technologies, and I love working on projects that challenge me to innovate and learn. When I'm not coding, you’ll find me exploring robotics or developing creative ideas that push the boundaries of technology.
        </p>

      </div>

      <!-- Informations personnelles et expériences -->
      <div class="aboutme_container_data">
        <!-- Infos personnelles -->
        <div class="aboutme_container_data_info" style="margin-top: 20px;">
          <h5 class="item" style="font-size: 30px; justify-content: center; text-align: center;">Personal Info</h5>
          <div style="display: flex; justify-content: space-evenly;">
            <div>
              <p class="item">First Name: <span style="color: #9290C3;">Mahamane Sani</span></p>
              <p class="item">Age: <span style="color: #9290C3;">19</span></p>
              <p class="item">Location: <span style="color: #9290C3;">Niamey, Niger</span></p>
              <p class="item">Email: <a href="mailto:saniadamou778@gmail.com" style="color: #9290C3;">{{"saniadamou778@gmail.com"}}</a></p>
            </div>
            <div style="margin-left: 20px;">
              <p class="item">Last Name: <span style="color: #9290C3;">Adamou Mahamane</span></p>
              <p class="item">Phone: <span style="color: #9290C3;">+227 94805811</span></p>
              <p class="item">Nationality: <span style="color: #9290C3;">Nigerienne</span></p>
              <p class="item">GitHub: <a href="https://github.com/SonicSayane" style="color: #9290C3;">SonicSayane</a></p>
            </div>
          </div>
          <a style="justify-content: center; text-align: center;" href="SaniAdamou.pdf" download>
            <button class="item button" style="width: 150px;">Download CV</button>
          </a>
        </div>

        <!-- Statistiques d'expérience -->
        <div class="aboutme_container_data_experience">
          <about-me-experience-card [data]="{title: 'Years of Experience', value: 2}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Projects Completed', value: 5}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Technologies Used', value: 10}"></about-me-experience-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aboutme_container {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      background-color: #1B1A55;
      margin-top: 30px;
      border-radius: 10px;
      color: white;
    }

    .aboutme_container_data {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .aboutme_container_data_info {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      margin-bottom: 20px;
      justify-content: space-evenly;
    }

    .aboutme_container_data_info > * {
      margin-bottom: 20px;
    }

    .aboutme_container_data_experience {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;
      width: 100%;
    }

    .aboutme_container_data_info > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .item {
      margin-bottom: 10px;
    }
  `]
})
export class AboutMeComponent {}
