import { Component } from "@angular/core";
import { TitleComponent } from "./title.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-experince-and-eduction",
  imports: [
    TitleComponent,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ],
  template: `
    <div id="experience-section" class="gen_container">
      <app-title title="Experience & Education"></app-title>
      <div class="experience_education_container">
        <!-- Experience Section -->
        <div class="experience_container">
          <h2>Professional Experience</h2>
          <mat-stepper orientation="vertical" [linear]="false" style="background-color: transparent;" #stepper>
              <mat-step>
                <ng-template matStepLabel>1. Personal Project (2022 - 2023)</ng-template>
                <h3>Student Management System - Personal Project</h3><br/>
                <p>Designed and developed a "Student Management System" to facilitate the tracking and management of student information in an academic environment. This system enabled the creation, modification, and deletion of student records and allowed administrators to track student progress, grades, and attendance.</p><br/>
                <p>Implemented key features such as role-based access control, secure authentication, and data storage using SQL databases to ensure data integrity and security.</p><br/>
                <p>Utilized ASP.NET Core for backend development and Angular for the frontend, ensuring a smooth and interactive user experience.</p><br/>
                <p>Integrated API services to provide real-time data updates, enhancing the usability of the application for administrators and staff members.</p><br/>
              </mat-step>
              <mat-step>
                <ng-template matStepLabel>2. Gabera (2023 - Present)</ng-template>
                <h3>Full Stack Developer - Gabera Software Solutions</h3><br/>
                <p>Developed the Identity and Access Management (IAM) System to securely manage user roles and permissions within enterprise applications.</p><br/>
                <p>Lead Developer for the "Claims Management" application, enhancing role-based claim assignments for improved security and access control.</p><br/>
                <p>Designed and implemented a dynamic "User Role Assignment" feature to streamline user role management and ensure seamless operations in the system.</p><br/>
                <p>Developed several internal tools using WPF and MAUI to improve team productivity and optimize workflow processes.</p><br/>
                <p>Collaborated with cross-functional teams to integrate Microsoft Entra ID for cloud-based user authentication and management.</p><br/>
              </mat-step>
              <mat-step>
                <ng-template matStepLabel>.3 Magani (2024 - present)</ng-template>
                <h3>Lead Developer - Magani</h3><br/>
                <p>Designed and implemented a web platform for the government to centralize pharmacy management using ASP.NET Core.</p><br/>
                <p>Developed a WPF desktop application to help pharmacists efficiently manage inventory, pricing, and transactions.</p><br/>
                <p>Created a MAUI mobile application to enable citizens to locate open pharmacies, compare prices, and access real-time stock information.</p><br/>
                <p>Integrated advanced security features, including SSO and JWT authentication, to ensure data protection and secure user access.</p><br/>
                <p>Optimized the system for deployment on intranet networks to serve low-connectivity regions.</p>
              </mat-step>

          </mat-stepper>
        </div>

        <!-- Education Section -->
        <div class="education_container">
          <h2>Education</h2>
          <mat-stepper orientation="vertical" [linear]="false" style="background-color: transparent;" #stepper>
            <mat-step>
              <ng-template matStepLabel>1. Université Abdou Moumouni de Niamey (2021-2024)</ng-template>
              <h3>Bachelor's Degree in Applied Fundamental Computer Science</h3><br/>
              <p>Focused on computer science, software development, artificial intelligence, and data mining.</p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>2. Baccalauréat Série D (2018-2021)</ng-template>
              <h3>High School Diploma</h3><br/>
              <p>Specialized in mathematics and sciences.</p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>3. BEPC (2014-2018)</ng-template>
              <h3>Junior High School Certificate</h3><br/>
              <p>Foundation in general education and sciences.</p>
            </mat-step>
          </mat-stepper>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .gen_container {
        display: flex;
        flex-direction: column;
        padding: 16px;
      }
      .experience_education_container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 32px;
      }
      .experience_container,
      .education_container {
        flex: 1;
      }
    `,
  ],
})
export class ExperinceAndEductionComponent {}
